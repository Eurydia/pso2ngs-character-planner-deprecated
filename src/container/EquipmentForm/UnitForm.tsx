import { FC, memo, useState } from "react";
import { Box } from "@mui/material";
import { AutoAwesome, Shield } from "@mui/icons-material";
import { AugmentData } from "../../assets/augments";
import { UnitData } from "../../assets/units";
import { FixaData } from "../../assets/fixas";
import { ENHANCEMENT_MIN, ENHANCEMENT_MAX } from "../../stores";
import CustomCard from "../../components/CustomCard";
import AugmentGroup from "./components/AugmentGroup";
import FixaSearch from "./components/FixaSearch";
import EquipmentFormLayout from "./layout/EquipmentFormLayout";
import EnhancementSelect from "./components/EnhancementSelect";
import UnitSearch from "./components/UnitSearch";

interface UnitFormProps {
  isRealistic: boolean;
  charLevel: number;
}
const UnitForm: FC<UnitFormProps> = memo(
  (props) => {
    const [unit, setUnit] = useState<null | UnitData>(null);
    const [enhancement, setEnhancement] = useState(ENHANCEMENT_MIN);
    const [fixa, setFixa] = useState<null | FixaData>(null);
    const [augments, setAugments] = useState<(null | AugmentData)[]>([
      null,
      null,
      null,
      null,
      null,
    ]);

    const disabled = unit === null && props.isRealistic;

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
                enhancement={
                  props.isRealistic ? enhancement : ENHANCEMENT_MAX
                }
                values={augments}
                onChange={setAugments}
              />
            }
          />
        }
        backTitle="Unit Stats"
        backTitleIcon={<AutoAwesome />}
        backContent={
          <Box sx={{ height: 400 }}>"nothing to see here."</Box>
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
