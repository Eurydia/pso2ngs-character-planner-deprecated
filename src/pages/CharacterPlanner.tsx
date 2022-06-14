import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  FoodItem,
  loadFoodItemsFromLocal,
  saveFoodItemToLocal,
} from "../assets/food";
import {
  Weapon,
  getWeaponTemplate,
  saveWeaponToLocal,
  loadWeaponFromLocal,
  getWeaponStatPayload,
  getWeaponATKAmount,
} from "../assets/weapons";
import {
  Unit,
  loadUnitFromLocal,
  getUnitTemplate,
  saveUnitToLocal,
  getUnitStatPayload,
  getUnitDEFAmount,
} from "../assets/units";
import {
  Character,
  getCharacterTemplate,
  getCharATKAmount,
  getCharDEFAmount,
  loadCharacterFromLocal,
  saveCharacterToLocal,
} from "../assets/character";
import CharacterForm from "../container/CharacterForm/CharacterForm";
import FoodForm from "../container/FoodForm/FoodForm";
import WeaponForm from "../container/EquipmentForm/WeaponForm";
import UnitForm from "../container/EquipmentForm/UnitForm";
import BPGateVisualizer from "../container/BPGateVisualizer";
import { tallyStats } from "../utility";
import { Stat, StatTypes } from "../assets/stats";
import { AugmentData } from "../assets/augments";

const getTotalBP = (
  character: Character,
  weapon: Weapon,
  units: Unit[],
  realistic: boolean,
): number => {
  // terms

  // sp used * 3
  // char atk
  // weapon pot level * 10

  // pp from equipment
  // hp from equipment
  // round((char def / 2) + augment bp)
  // round(weapon atk * (1 - floor pot) / 2)

  const from_sp = (character.sub_sp + character.main_sp) * 3;

  const from_char_atk = getCharATKAmount(
    character.main_class.base_attack,

    character.level,
  );

  let from_augment_bp = 0;

  let from_potential = 0;
  let from_weapon_atk = 0;
  if (weapon.weapon !== null) {
    from_potential = weapon.potential_level * 10;
    from_weapon_atk = getWeaponATKAmount(
      weapon.weapon.base_attack,
      weapon.weapon.rarity,
      weapon.enhancement,
    );
    for (const stat of weapon.weapon.payload.stats) {
      if (stat.stat_type === StatTypes.FLOOR_POT) {
        from_weapon_atk *= stat.amount;
      }
    }
    for (const augment of weapon.augments) {
      if (augment !== null) {
        for (const stat of augment.payload.stats) {
          if (stat.stat_type === StatTypes.BP) {
            from_augment_bp += stat.amount;
          } else if (stat.stat_type === StatTypes.FLOOR_POT) {
            from_weapon_atk *= stat.amount;
          }
        }
      }
    }
  }

  let from_unit_hp = 0;
  let from_unit_pp = 0;
  let from_char_def = getCharDEFAmount(
    character.main_class.base_defense,
    character.level,
  );
  for (const unit of units) {
    if (unit.unit !== null) {
      from_char_def += getUnitDEFAmount(
        unit.unit.base_defense,
        unit.unit.rarity,
        unit.enhancement,
      );
      for (const stat of unit.unit.payload.stats) {
        if (stat.stat_type === StatTypes.HP) {
          from_unit_hp += stat.amount;
        } else if (stat.stat_type === StatTypes.PP) {
          from_unit_pp += stat.amount;
        }
      }
      for (const augment of unit.augments) {
        if (augment !== null) {
          for (const stat of augment.payload.stats) {
            if (stat.stat_type === StatTypes.BP) {
              from_augment_bp += stat.amount;
            } else if (stat.stat_type === StatTypes.FLOOR_POT) {
              from_weapon_atk *= stat.amount;
            }
          }
        }
      }
    }
  }

  from_weapon_atk /= 2;
  from_unit_hp /= 10;
  from_char_def /= 2;

  console.log(
    from_char_atk,
    from_weapon_atk,
    from_potential,
    from_char_def,
    from_augment_bp,
    from_unit_hp,
    from_unit_pp,
    from_sp,
  );
  return (
    from_char_atk +
    Math.floor(from_weapon_atk) +
    from_potential +
    Math.floor(from_char_def + from_augment_bp) +
    from_unit_hp +
    from_unit_pp +
    from_sp
  );
};

const CharacterPlanner = () => {
  const [isRealistic, setRealistic] = useState(true);

  const [character, setCharacter] = useState<Character>(
    getCharacterTemplate,
  );
  useEffect(() => {
    saveCharacterToLocal(character);
  }, [character]);

  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  useEffect(() => {
    saveFoodItemToLocal(foodItems);
  }, [foodItems]);

  const [weapon, setWeapon] = useState<Weapon>(getWeaponTemplate);
  useEffect(() => {
    saveWeaponToLocal(weapon);
  }, [weapon]);

  const [unitA, setUnitA] = useState<Unit>(getUnitTemplate);
  useEffect(() => {
    saveUnitToLocal(unitA, "unita");
  }, [unitA]);

  const [unitB, setUnitB] = useState<Unit>(getUnitTemplate);
  useEffect(() => {
    saveUnitToLocal(unitB, "unitb");
  }, [unitB]);

  const [unitC, setUnitC] = useState<Unit>(getUnitTemplate);
  useEffect(() => {
    saveUnitToLocal(unitC, "unitc");
  }, [unitC]);

  const char_level = character.level;

  const bp = getTotalBP(
    character,
    weapon,
    [unitA, unitB, unitC],
    isRealistic,
  );
  console.log(bp);
  return (
    <Container maxWidth="lg">
      {/* <FormControlLabel
        control={
          <Switch
            checked={isRealistic}
            onChange={(e) => setRealistic(e.target.checked)}
          />
        }
        label="is realistic"
      /> */}
      <Grid container spacing={2}>
        <Grid
          item
          md={6}
          sx={{
            display: "grid",
            alignItems: "flex-end",
          }}
        >
          <CharacterForm
            getInitValue={loadCharacterFromLocal}
            onChange={setCharacter}
          />
        </Grid>
        <Grid item md={6}>
          <FoodForm
            getInitValues={loadFoodItemsFromLocal}
            onChange={setFoodItems}
          />
        </Grid>
        <Grid item md={6}>
          <WeaponForm
            isRealistic={isRealistic}
            charLevel={char_level}
            getInitValue={loadWeaponFromLocal}
            onChange={setWeapon}
          />
        </Grid>
        <Grid item md={6}>
          <UnitForm
            isRealistic={isRealistic}
            charLevel={char_level}
            getInitValue={() => loadUnitFromLocal("unita")}
            onChange={setUnitA}
          />
        </Grid>
        <Grid item md={6}>
          <UnitForm
            isRealistic={isRealistic}
            charLevel={char_level}
            getInitValue={() => loadUnitFromLocal("unitb")}
            onChange={setUnitB}
          />
        </Grid>
        <Grid item md={6}>
          <UnitForm
            isRealistic={isRealistic}
            charLevel={char_level}
            getInitValue={() => loadUnitFromLocal("unitc")}
            onChange={setUnitC}
          />
        </Grid>
        <Grid item md={12}>
          {/* <BPGateVisualizer character_bp={bp} /> */}
        </Grid>
      </Grid>
    </Container>
  );
};
export default CharacterPlanner;
