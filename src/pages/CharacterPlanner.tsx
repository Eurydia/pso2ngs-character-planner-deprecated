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
  getWeaponAtk,
} from "../assets/weapons";
import {
  Unit,
  loadUnitFromLocal,
  getUnitTemplate,
  saveUnitToLocal,
  getUnitStatPayload,
} from "../assets/units";
import {
  Character,
  getCharacterTemplate,
  loadCharacterFromLocal,
  saveCharacterToLocal,
} from "../assets/character";
import CharacterForm from "../container/CharacterForm/CharacterForm";
import FoodForm from "../container/FoodForm/FoodForm";
import WeaponForm from "../container/EquipmentForm/WeaponForm";
import UnitForm from "../container/EquipmentForm/UnitForm";
import BPGateVisualizer from "../container/BPGateVisualizer";
import { tallyStats } from "../utility";
import { Stat } from "../assets/stats";

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
          <BPGateVisualizer character_bp={300} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default CharacterPlanner;
