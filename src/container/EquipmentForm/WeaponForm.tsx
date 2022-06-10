import { FC, memo, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { AutoAwesome, Carpenter } from "@mui/icons-material";
import { ENHANCEMENT_MAX } from "../../stores";
import { Weapon } from "../../assets/weapons";
import CustomCard from "../../components/CustomCard";
import AugmentGroup from "./components/AugmentGroup";
import WeaponSearch from "./components/WeaponSearch";
import FixaSearch from "./components/FixaSearch";
import EquipmentFormLayout from "./layout/EquipmentFormLayout";
import EnhancementSelect from "./components/EnhancementSelect";
import PotentialSelect from "./components/PotentialSelect";
import StatsList from "./components/StatsList";

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

    const disabled = weapon === null && props.isRealistic;

    const payload = [];
    return (
      <CustomCard
        frontTitle="Weapon"
        frontTitleIcon={<Carpenter />}
        frontContent={
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
                  props.isRealistic ? enhancement : ENHANCEMENT_MAX
                }
                values={augments}
                onChange={setAugments}
              />
            }
          />
        }
        backTitle="[header]"
        backTitleIcon={<AutoAwesome />}
        backContent={
          <Box sx={{ height: 400 }}>
            <StatsList pot_level={potLevel} />
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

export default WeaponForm;
