import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Switch,
  FormControlLabel,
} from "@mui/material";
import FoodForm from "../container/FoodForm/FoodForm";
import ClassForm from "../container/ClassForm/ClassForm";
import WeaponForm from "../container/EquipmentForm/WeaponForm";
import {
  POTENTIAL_MAX,
  CHARACTER_MIN,
  ENHANCEMENT_MAX,
  POTENTIAL_MIN,
  ENHANCEMENT_MIN,
  CHARACTER_MAX,
} from "../stores";
import FOOD_ITEMS, {
  FoodItem,
  FoodItemSignature,
  typeguardFoodItemSignature,
} from "../assets/food-items";
import WEAPONS, {
  Weapon,
  WeaponDataSignature,
  WeaponSignature,
} from "../assets/weapons";
import AUGMENTS, {
  AugmentDataSignature,
  typeguardAugmentDataSignature,
} from "../assets/augments";
import FIXAS, {
  FixaDataSignature,
  typeguardFixaDataSignature,
} from "../assets/fixas";
import { typeguardWeaponDataSignature } from "../assets/weapons/typeguard";
import UnitForm from "../container/EquipmentForm/UnitForm";
import { Unit } from "../assets/units";

const storeFoodItemToLocal = (items: FoodItem[]) => {
  let res: FoodItemSignature[] = [];
  items.forEach(({ name, amount }) => {
    res.push({ name, amount });
  });
  localStorage.setItem("food", JSON.stringify(res));
};

const getFoodItemsFromLocal = () => {
  const stored_string = localStorage.getItem("food");
  const stored: FoodItemSignature[] = stored_string
    ? JSON.parse(stored_string).filter(typeguardFoodItemSignature)
    : [];

  const seen = stored.map((item) => item.name);

  let res: FoodItem[] = [];
  FOOD_ITEMS.forEach((item) => {
    let amount = 0;
    if (seen.includes(item.name)) {
      for (const stored_item of stored) {
        if (stored_item.name === item.name) {
          amount = stored_item.amount;
        }
      }
    }
    res.push({ ...item, amount });
  });
  return res;
};

const storeWeaponToLocal = ({
  weapon,
  fixa,
  potential_level,
  enhancement,
  augments,
}: Weapon) => {
  const weapon_sig: WeaponDataSignature | null = weapon
    ? { name: weapon.name }
    : null;

  const fixa_sig: FixaDataSignature | null = fixa
    ? { name: fixa.name, level: fixa.level }
    : null;

  let augment_sigs: (AugmentDataSignature | null)[] = [];
  augments.forEach((augment) => {
    if (augment !== null) {
      augment_sigs.push({
        name: augment.name,
        level: augment.level,
        isSType: augment.isSType,
      });
    } else {
      augment_sigs.push(null);
    }
  });

  const res: WeaponSignature = {
    weapon: weapon_sig,
    fixa: fixa_sig,
    potential_level,
    enhancement,
    augments: augment_sigs,
  };
  localStorage.setItem("weapon", JSON.stringify(res));
};

const getWeaponFromLocal = (): Weapon => {
  const stored_string = localStorage.getItem("weapon");
  let stored: WeaponSignature = stored_string
    ? JSON.parse(stored_string)
    : getEmptyWeapon();

  let augments: null[] = [];
  for (
    let i = 0;
    i < 1 + Math.floor((ENHANCEMENT_MAX - 10) / 10);
    i++
  ) {
    augments.push(null);
  }

  let res: Weapon = {
    weapon: null,
    fixa: null,
    potential_level: 0,
    enhancement: 0,
    augments,
  };
  if (
    stored.weapon !== null &&
    typeguardWeaponDataSignature(stored.weapon)
  ) {
    for (const weapon_data of WEAPONS) {
      if (weapon_data.name === stored.weapon.name) {
        res.weapon = weapon_data;
        break;
      }
    }
  }

  if (
    stored.fixa !== null &&
    typeguardFixaDataSignature(stored.fixa)
  ) {
    for (const fixa_data of FIXAS) {
      if (
        fixa_data.name === stored.fixa.name &&
        fixa_data.level === stored.fixa.level
      ) {
        res.fixa = fixa_data;
        break;
      }
    }
  }

  if (
    typeof stored.potential_level === "number" &&
    stored.potential_level >= POTENTIAL_MIN &&
    stored.potential_level <= POTENTIAL_MAX
  ) {
    res.potential_level = stored.potential_level;
  }

  if (
    typeof stored.enhancement === "number" &&
    stored.enhancement >= ENHANCEMENT_MIN &&
    stored.enhancement <= ENHANCEMENT_MAX
  ) {
    res.enhancement = stored.enhancement;
  }

  stored.augments.forEach((augment_sig, index) => {
    if (index > res.augments.length) {
      return;
    }
    if (augment_sig && typeguardAugmentDataSignature(augment_sig)) {
      for (const augment of AUGMENTS) {
        if (
          augment.name === augment_sig.name &&
          augment.level === augment_sig.level &&
          augment.isSType === augment_sig.isSType
        ) {
          res.augments[index] = augment;
        }
      }
    }
  });

  return res;
};

const getEmptyWeapon = (): Weapon => {
  let augments: null[] = [];
  for (
    let i = 0;
    i < 1 + Math.floor((ENHANCEMENT_MAX - 10) / 10);
    i++
  ) {
    augments.push(null);
  }
  return {
    weapon: null,
    enhancement: 0,
    potential_level: 0,
    fixa: null,
    augments,
  };
};
const getEmptyUnit = (): Unit => {
  return {
    unit: null,
    fixa: null,
    enhancement: 0,
    augments: [null, null, null, null, null],
  };
};

const CharacterPlanner = () => {
  const [isRealistic, setRealistic] = useState(true);
  const [charLevel, setcharlevel] = useState(CHARACTER_MAX);

  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  useEffect(() => {
    storeFoodItemToLocal(foodItems);
  }, [foodItems]);

  const [weapon, setWeapon] = useState<Weapon>(getEmptyWeapon);
  useEffect(() => {
    storeWeaponToLocal(weapon);
  }, [weapon]);

  const [unitA, setUnitA] = useState<Unit>(getEmptyUnit);
  // const [unitA, setUnitA] = useState(getInitEquipment);
  // const [unitB, setUnitB] = useState(getInitEquipment);
  // const [unitC, setUnitC] = useState(getInitEquipment);
  return (
    <Container maxWidth="lg">
      <FormControlLabel
        control={
          <Switch
            checked={isRealistic}
            onChange={(e) => setRealistic(e.target.checked)}
          />
        }
        label="is realistic"
      />
      <Grid container spacing={2}>
        <Grid item md={6}>
          <ClassForm
            charLevel={charLevel}
            onCharLevelChange={setcharlevel}
          />
        </Grid>
        <Grid item md={6}>
          <FoodForm
            getInitValues={getFoodItemsFromLocal}
            onChange={setFoodItems}
          />
        </Grid>

        <Grid item md={6}>
          <WeaponForm
            isRealistic={isRealistic}
            charLevel={charLevel}
            getInitValue={getWeaponFromLocal}
            onChange={setWeapon}
          />
        </Grid>
        <Grid item md={6}>
          <UnitForm
            isRealistic={isRealistic}
            charLevel={charLevel}
            getInitValue={() => unitA}
            onChange={setUnitA}
          />
        </Grid>
        {/* 
        <Grid item md={6}>
          <EquipmentForm
            mode="unit"
            isRealistic={isRealistic}
            charLevel={charLevel}
            onChange={setUnitB}
          />
        </Grid>
        <Grid item md={6}>
          <EquipmentForm
            mode="unit"
            isRealistic={isRealistic}
            charLevel={charLevel}
            onChange={setUnitC}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
};
export default CharacterPlanner;
