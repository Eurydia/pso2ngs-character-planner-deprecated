import { FC, Fragment, memo, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { AutoAwesome, Carpenter } from "@mui/icons-material";
import { ENHANCEMENT_MAX } from "../../stores";
import { getWeaponStatPayload, Weapon } from "../../assets/weapons";
import { Stat, StatPayload, StatTypes } from "../../assets/stats";
import { getActiveAugmentSlots } from "../../assets/augments";
import { tallyStats } from "../../utility";
import StatList from "../../components/StatList/StatList";
import AugmentGroup from "./components/AugmentGroup";
import WeaponSearch from "./components/WeaponSearch";
import FixaSearch from "./components/FixaSearch";
import EquipmentFormLayout from "./layout/EquipmentFormLayout";
import EnhancementSelect from "./components/EnhancementSelect";
import PotentialSelect from "./components/PotentialSelect";

interface WeaponFormProps {
  realistic: boolean;
  charLevel: number;
  label: string;
  getInitValue: () => Weapon;
  onChange: (value: Weapon) => void;
}
const WeaponForm: FC<WeaponFormProps> = memo(
  (props) => {
    const { getInitValue, onChange, realistic } = props;
    const {
      weapon: init_weapon,
      potential_level: init_pot_level,
      fixa: init_fixa,
      enhancement: init_enhacement,
      augments: init_augments,
    } = getInitValue();
    const [weapon, setWeapon] = useState(init_weapon);
    const [potLevel, setPotLevel] = useState(init_pot_level);
    const [enhancement, setEnhancement] = useState(init_enhacement);
    const [fixa, setFixa] = useState(init_fixa);
    const [augments, setAugments] = useState(init_augments);
    useEffect(() => {
      onChange({
        weapon,
        potential_level: potLevel,
        enhancement,
        fixa,
        augments,
      });
    }, [weapon, potLevel, enhancement, fixa, augments, onChange]);

    const [dialogOpen, setDialogOpen] = useState(false);
    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    /**
     * payload behavior:
     * when realistic mode is ON
     * - if weapon is empty, add nothing to the payload.
     * - if weapon is not empty, add everything to the payload.
     *    - using real enhancement level to find
     *      active augment slots.
     * when realistic mode is OFF
     * - if weapon is empty, add augments to payload.
     *    - this is because in compare mode, the user
     *      can select augments freely.
     * - if weapon is not empty, add it and augments to paylaod.
     */
    const weaponIsNull = weapon === null;

    let stats: Stat[] = [];
    let payload: StatPayload[] = [];
    let active_aug_slots = 0;
    if (realistic) {
      if (!weaponIsNull) {
        active_aug_slots = getActiveAugmentSlots(enhancement);
      }
    } else {
      active_aug_slots = getActiveAugmentSlots(ENHANCEMENT_MAX);
    }
    for (let i = 0; i < active_aug_slots; i++) {
      const augment = augments[i];
      if (augment !== null) {
        stats.push(...augment.payload.stats);
        payload.push(augment.payload);
      }
    }
    if (!weaponIsNull) {
      const tallied = tallyStats([...weapon.payload.stats, ...stats]);
      payload.unshift(
        getWeaponStatPayload(
          weapon,
          enhancement,
          potLevel,
          tallied[StatTypes.FLOOR_POT] / 2,
        ),
      );
      if (fixa !== null) {
        payload.push(fixa.payload);
      }
    }

    return (
      <Fragment>
        <Card variant="outlined">
          <CardHeader
            title={
              <Stack direction="row" spacing={1} alignItems="center">
                <Carpenter color="primary" />
                <Typography variant="h6" color="primary">
                  {props.label}
                </Typography>
              </Stack>
            }
          />
          <CardContent>
            <EquipmentFormLayout
              equipmentSlot={
                <WeaponSearch
                  isRealistic={props.realistic}
                  charLevel={props.charLevel}
                  enhancement={enhancement}
                  value={weapon}
                  onChange={setWeapon}
                />
              }
              potentialSlot={
                <PotentialSelect
                  isDisabled={weaponIsNull}
                  value={potLevel}
                  onChange={setPotLevel}
                />
              }
              enhancementSlot={
                <EnhancementSelect
                  isDisabled={weaponIsNull}
                  value={enhancement}
                  onChange={setEnhancement}
                />
              }
              fixaSlot={
                <FixaSearch
                  mode="weapon"
                  isDisabled={weaponIsNull}
                  value={fixa}
                  onChange={setFixa}
                />
              }
              augmentsSlot={
                <AugmentGroup
                  disabled={weaponIsNull && props.realistic}
                  activeSlots={active_aug_slots}
                  getInitValues={() => augments}
                  onChange={setAugments}
                />
              }
            />
          </CardContent>
          <CardActions>
            <Button
              onClick={openDialog}
              variant="contained"
              startIcon={<AutoAwesome />}
            >
              view stats
            </Button>
          </CardActions>
        </Card>
        <Dialog
          open={dialogOpen}
          onClose={closeDialog}
          fullWidth
          maxWidth="sm"
          scroll="body"
        >
          <DialogTitle>
            <Stack direction="row" spacing={1} alignItems="center">
              <AutoAwesome color="primary" />
              <Typography variant="h6" color="primary">
                Weapon Stats
              </Typography>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <StatList payload={payload} />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>close</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  },
  (prev, next) => {
    if (prev.realistic !== next.realistic) {
      return false;
    }

    if (prev.charLevel !== next.charLevel) {
      return false;
    }

    return true;
  },
);

export default WeaponForm;
