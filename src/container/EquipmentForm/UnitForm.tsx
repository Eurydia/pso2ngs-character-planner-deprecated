import { FC, memo, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { AutoAwesome, Shield } from "@mui/icons-material";
import { ENHANCEMENT_MAX } from "../../stores";
import CustomCard from "../../components/CustomCard";
import AugmentGroup from "./components/AugmentGroup";
import UnitSearch from "./components/UnitSearch";
import FixaSearch from "./components/FixaSearch";
import EquipmentFormLayout from "./layout/EquipmentFormLayout";
import EnhancementSelect from "./components/EnhancementSelect";
import StatsList from "./components/StatsList";
import { StatPayload } from "../../assets/stats";
import { getActiveAugmentSlots } from "../../utility";
import { getUnitStatPayload, Unit } from "../../assets/units";

interface UnitFormProps {
  isRealistic: boolean;
  charLevel: number;
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

    const disabled = unit === null && props.isRealistic;

    const active_slots = props.isRealistic
      ? getActiveAugmentSlots(enhancement)
      : getActiveAugmentSlots(ENHANCEMENT_MAX);

    let payload: StatPayload[] = [];
    if (!disabled) {
      if (unit !== null) {
        payload.push(getUnitStatPayload(unit, enhancement));
      }
      if (fixa !== null) {
        payload.push(fixa.payload);
      }
      augments.forEach((augment, i) => {
        if (augment !== null && i < active_slots) {
          payload.push(augment.payload);
        }
      });
    }

    return (
      <CustomCard
        frontTitle="Unit"
        frontTitleIcon={<Shield />}
        frontContent={
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
                isDisabled={disabled}
                value={enhancement}
                onChange={setEnhancement}
              />
            }
            fixaSlot={
              <FixaSearch
                isDisabled={disabled}
                mode="unit"
                value={fixa}
                onChange={setFixa}
              />
            }
            augmentsSlot={
              <AugmentGroup
                disabled={disabled}
                activeSlots={active_slots}
                getInitValues={() => augments}
                onChange={setAugments}
              />
            }
          />
        }
        backTitle="Stats"
        backTitleIcon={<AutoAwesome />}
        backContent={
          <Box sx={{ height: 400 }}>
            <StatsList payloads={payload} />
          </Box>
        }
      />
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
