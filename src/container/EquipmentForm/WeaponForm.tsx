import { FC, memo, useState } from "react";
import { Box } from "@mui/material";
import { AutoAwesome, Carpenter } from "@mui/icons-material";
import { AugmentData } from "../../assets/augments";
import { Weapon, Fixa } from "../../types";
import {
  ENHANCEMENT_MIN,
  ENHNACEMENT_MAX,
  POTENTIAL_MIN,
} from "../../stores";
import CustomCard from "../../components/CustomCard";
import AugmentGroup from "./components/AugmentGroup";
import EquipmentSearch from "./components/EquipmentSearch";
import FixaSearch from "./components/FixaSearch";
import EquipmentFormLayout from "./layout/EquipmentFormLayout";
import EnhancementSelect from "./components/EnhancementSelect";
import PotentialSelect from "./components/PotentialSelect";

interface WeaponFormProps {
  isRealistic: boolean;
  charLevel: number;
}
const WeaponForm: FC<WeaponFormProps> = memo(
  (props) => {
    const [weapon, setWeapon] = useState<null | Weapon>(null);
    const [potLevel, setPotLevel] = useState(POTENTIAL_MIN);
    const [enhancement, setEnhancement] = useState(ENHANCEMENT_MIN);
    const [fixa, setFixa] = useState<null | Fixa>(null);
    const [augments, setAugments] = useState<(null | AugmentData)[]>([
      null,
      null,
      null,
      null,
      null,
    ]);

    const disabled = weapon === null && props.isRealistic;

    return (
      <CustomCard
        frontTitle="Weapon"
        frontTitleIcon={<Carpenter />}
        frontContent={
          <EquipmentFormLayout
            equipmentSlot={
              <EquipmentSearch
                mode="weapon"
                isRealistic={props.isRealistic}
                charLevel={props.charLevel}
                value={weapon}
                onChange={setWeapon}
              />
            }
            potentialSlot={
              <PotentialSelect
                isDisabled={disabled}
                value={potLevel}
                onChange={setPotLevel}
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
                mode="weapon"
                value={fixa}
                onChange={setFixa}
              />
            }
            augmentsSlot={
              <AugmentGroup
                disabled={disabled}
                enhancement={
                  props.isRealistic ? enhancement : ENHNACEMENT_MAX
                }
                values={augments}
                onChange={setAugments}
              />
            }
          />
        }
        backTitle="Equipment Stats"
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

export default WeaponForm;
