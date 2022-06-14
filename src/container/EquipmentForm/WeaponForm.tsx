import { FC, memo, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { AutoAwesome, Carpenter } from "@mui/icons-material";
import { ENHANCEMENT_MAX } from "../../stores";
import { getWeaponStatPayload, Weapon } from "../../assets/weapons";
import CustomCard from "../../components/CustomCard";
import AugmentGroup from "./components/AugmentGroup";
import WeaponSearch from "./components/WeaponSearch";
import FixaSearch from "./components/FixaSearch";
import EquipmentFormLayout from "./layout/EquipmentFormLayout";
import EnhancementSelect from "./components/EnhancementSelect";
import PotentialSelect from "./components/PotentialSelect";
import StatsList from "../../components/StatsList";
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
    // FIXME: You should not be able to select a fixa
    // when the weapon slot is empty.
    const disabled = weapon === null && props.isRealistic;
    const active_slots = props.isRealistic
      ? getActiveAugmentSlots(enhancement)
      : getActiveAugmentSlots(ENHANCEMENT_MAX);

    // TODO: Fix these
    let payload: StatPayload[] = [];
    if (!disabled) {
      if (weapon !== null) {
        payload.push(
          getWeaponStatPayload(weapon, enhancement, potLevel),
        );
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

export default WeaponForm;
