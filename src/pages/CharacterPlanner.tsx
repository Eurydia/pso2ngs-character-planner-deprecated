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
import { CHARACTER_MAX } from "../stores";
import FOOD_ITEMS, {
  FoodItem,
  FoodItemSignature,
  typeguardFoodItemSignature,
} from "../assets/food-items";
import {
  getWeaponTemplate,
  Weapon,
  storeWeaponToLocal,
  getWeaponFromLocal,
} from "../assets/weapons";
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

  const [weapon, setWeapon] = useState<Weapon>(getWeaponTemplate);
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
