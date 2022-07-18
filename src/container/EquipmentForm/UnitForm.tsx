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
import { AutoAwesome, Shield } from "@mui/icons-material";
import { StatPayload } from "../../assets/stats";
import { getUnitStatPayload, Unit } from "../../assets/units";
import { getAugmentSlots } from "../../assets/augments";
import { ENHANCEMENT_MAX } from "../../stores";
import AugmentGroup from "./components/AugmentGroup";
import UnitSearch from "./components/UnitSearch";
import FixaSearch from "./components/FixaSearch";
import EquipmentFormLayout from "./layout/EquipmentFormLayout";
import EnhancementSelect from "./components/EnhancementSelect";
import StatList from "../../components/StatList/StatList";

interface UnitFormProps {
  realistic: boolean;
  charLevel: number;
  label: string;
  getInitValue: () => Unit;
  onChange: (value: Unit) => void;
}
const UnitForm: FC<UnitFormProps> = memo(
  (props) => {
    const { getInitValue, onChange, realistic } = props;
    const {
      unit: init_unit,
      fixa: init_fixa,
      enhancement: init_enhacement,
      augments: init_augments,
    } = getInitValue();
    const [unit, setUnit] = useState(init_unit);
    const [enhancement, setEnhancement] = useState(init_enhacement);
    const [fixa, setFixa] = useState(init_fixa);
    const [augments, setAugments] = useState(init_augments);
    useEffect(() => {
      onChange({
        unit,
        enhancement,
        fixa,
        augments,
      });
    }, [unit, enhancement, fixa, augments, onChange]);

    const [dialogOpen, setDialogOpen] = useState(false);
    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    /**
     * payload behavior:
     * when realistic mode is ON
     * - if unit is empty, add nothing to the payload.
     * - if unit is not empty, add everything to the payload.
     *    - using real enhancement level to find
     *      active augment slots.
     * when realistic mode is OFF
     * - if unit is empty, add augments to payload.
     *    - this is because in compare mode, the user
     *      can select augments freely.
     * - if unit is not empty, add it and augments to paylaod.
     */
    const unitIsNull = unit === null;

    let payload: StatPayload[] = [];
    let active_aug_slots = 0;
    if (realistic) {
      if (!unitIsNull) {
        active_aug_slots = getAugmentSlots(enhancement);
      }
    } else {
      active_aug_slots = getAugmentSlots(ENHANCEMENT_MAX);
    }
    for (let i = 0; i < active_aug_slots; i++) {
      const augment = augments[i];
      if (augment !== null) {
        payload.push(augment.payload);
      }
    }
    if (!unitIsNull) {
      payload.push(getUnitStatPayload(unit, enhancement));
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
                <Shield color="primary" />
                <Typography variant="h6" color="primary">
                  {props.label}
                </Typography>
              </Stack>
            }
          />
          <CardContent>
            <EquipmentFormLayout
              equipmentSlot={
                <UnitSearch
                  isRealistic={props.realistic}
                  charLevel={props.charLevel}
                  enhancement={enhancement}
                  value={unit}
                  onChange={setUnit}
                />
              }
              enhancementSlot={
                <EnhancementSelect
                  isDisabled={unitIsNull}
                  value={enhancement}
                  onChange={setEnhancement}
                />
              }
              fixaSlot={
                <FixaSearch
                  isDisabled={unitIsNull}
                  mode="unit"
                  value={fixa}
                  onChange={setFixa}
                />
              }
              augmentsSlot={
                <AugmentGroup
                  disabled={unitIsNull && props.realistic}
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
                Unit Stats
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

export default UnitForm;
