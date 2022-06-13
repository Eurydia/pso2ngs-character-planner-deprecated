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
import {
  FoodItem,
  getFoodItemsFromLocal,
  storeFoodItemToLocal,
} from "../assets/food";
import {
  Weapon,
  getWeaponTemplate,
  saveWeaponToLocal,
  getWeaponFromLocal,
} from "../assets/weapons";
import UnitForm from "../container/EquipmentForm/UnitForm";
import {
  Unit,
  getUnitFromLocal,
  getUnitTemplate,
  saveUnitToLocal,
} from "../assets/units";

const CharacterPlanner = () => {
  const [isRealistic, setRealistic] = useState(true);
  const [charLevel, setcharlevel] = useState(CHARACTER_MAX);

  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  useEffect(() => {
    storeFoodItemToLocal(foodItems);
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
            getInitValue={() => getUnitFromLocal("unita")}
            onChange={setUnitA}
          />
        </Grid>
        <Grid item md={6}>
          <UnitForm
            isRealistic={isRealistic}
            charLevel={charLevel}
            getInitValue={() => getUnitFromLocal("unitb")}
            onChange={setUnitB}
          />
        </Grid>
        <Grid item md={6}>
          <UnitForm
            isRealistic={isRealistic}
            charLevel={charLevel}
            getInitValue={() => getUnitFromLocal("unitc")}
            onChange={setUnitC}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default CharacterPlanner;
