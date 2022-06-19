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
import AugmentGroup from "./components/AugmentGroup";
import WeaponSearch from "./components/WeaponSearch";
import FixaSearch from "./components/FixaSearch";
import EquipmentFormLayout from "./layout/EquipmentFormLayout";
import EnhancementSelect from "./components/EnhancementSelect";
import PotentialSelect from "./components/PotentialSelect";
import StatsList from "../../components/StatList/StatList";
import { StatPayload } from "../../assets/stats";
import { getActiveAugmentSlots } from "../../utility";

interface WeaponFormProps {
  isRealistic: boolean;
  charLevel: number;
  getInitValue: () => Weapon;
  onChange: (value: Weapon) => void;
}
const WeaponForm: FC<WeaponFormProps> = memo(
  (props) => {
    const {
      weapon: init_weapon,
      potential_level: init_pot_level,
      fixa: init_fixa,
      enhancement: init_enhacement,
      augments: init_augments,
    } = props.getInitValue();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [weapon, setWeapon] = useState(init_weapon);
    const [potLevel, setPotLevel] = useState(init_pot_level);
    const [enhancement, setEnhancement] = useState(init_enhacement);
    const [fixa, setFixa] = useState(init_fixa);
    const [augments, setAugments] = useState(init_augments);
    useEffect(() => {
      props.onChange({
        weapon,
        potential_level: potLevel,
        enhancement,
        fixa,
        augments,
      });
    }, [weapon, potLevel, enhancement, fixa, augments, props]);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const weaponIsNull = weapon === null;
    const active_slots = getActiveAugmentSlots(
      props.isRealistic ? enhancement : ENHANCEMENT_MAX,
    );

    let payload: StatPayload[] = [];
    /**
     * Don't include fixa stats when weapon is empty
     */
    if (!weaponIsNull) {
      payload.push(
        getWeaponStatPayload(weapon, enhancement, potLevel),
      );
      if (fixa !== null) {
        payload.push(fixa.payload);
      }
    }
    for (let i = 0; i < active_slots; i++) {
      const augment = augments[i];
      if (augment !== null) {
        payload.push(augment.payload);
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
                  Weapon
                </Typography>
              </Stack>
            }
          />
          <CardContent>
            <EquipmentFormLayout
              equipmentSlot={
                <WeaponSearch
                  isRealistic={props.isRealistic}
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
                  disabled={weaponIsNull && props.isRealistic}
                  activeSlots={active_slots}
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
            <StatsList payload={payload} />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>close</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  },
  (prev, next) => {
    if (prev.isRealistic !== next.isRealistic) {
      return false;
    }

    if (prev.charLevel !== next.charLevel) {
      return false;
    }

    return true;
  },
);

export default WeaponForm;
