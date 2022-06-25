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
import { getActiveAugmentSlots } from "../../assets/augments";
import { ENHANCEMENT_MAX } from "../../stores";
import AugmentGroup from "./components/AugmentGroup";
import UnitSearch from "./components/UnitSearch";
import FixaSearch from "./components/FixaSearch";
import EquipmentFormLayout from "./layout/EquipmentFormLayout";
import EnhancementSelect from "./components/EnhancementSelect";
import StatList from "../../components/StatList/StatList";

interface UnitFormProps {
  isRealistic: boolean;
  charLevel: number;
  label: string;
  getInitValue: () => Unit;
  onChange: (value: Unit) => void;
}
const UnitForm: FC<UnitFormProps> = memo(
  (props) => {
    const {
      unit: init_unit,
      fixa: init_fixa,
      enhancement: init_enhacement,
      augments: init_augments,
    } = props.getInitValue();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [unit, setUnit] = useState(init_unit);
    const [enhancement, setEnhancement] = useState(init_enhacement);
    const [fixa, setFixa] = useState(init_fixa);
    const [augments, setAugments] = useState(init_augments);
    useEffect(() => {
      props.onChange({
        unit,
        enhancement,
        fixa,
        augments,
      });
    }, [unit, enhancement, fixa, augments, props]);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const unitIsNull = unit === null;

    let payload: StatPayload[] = [];
    if (!unitIsNull) {
      payload.push(getUnitStatPayload(unit, enhancement));
      if (fixa !== null) {
        payload.push(fixa.payload);
      }
    }
    const active_slots = getActiveAugmentSlots(
      props.isRealistic ? enhancement : ENHANCEMENT_MAX,
    );
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
                  isRealistic={props.isRealistic}
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
                  disabled={unitIsNull && props.isRealistic}
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
    if (prev.isRealistic !== next.isRealistic) {
      return false;
    }

    if (prev.charLevel !== next.charLevel) {
      return false;
    }

    return true;
  },
);

export default UnitForm;
