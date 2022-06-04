import { useState } from "react";
import {
  Grid,
  Container,
  Switch,
  FormControlLabel,
} from "@mui/material";
import FoodForm from "../container/FoodForm/FoodForm";
import ClassForm from "../container/ClassForm/ClassForm";
import WeaponForm from "../container/EquipmentForm/WeaponForm";
import { CHARACTER_MIN } from "../stores";
import { Conditional, Stat } from "../types";

const getInitEquipment = (): {
  stats: Stat[];
  conditionals: Conditional[];
} => {
  return { stats: [], conditionals: [] };
};

const CharacterPlanner = () => {
  const [isRealistic, setRealistic] = useState(true);
  const [charLevel, setcharlevel] = useState(CHARACTER_MIN);

  const [weapon, setWeapon] = useState(getInitEquipment);
  const [unitA, setUnitA] = useState(getInitEquipment);
  const [unitB, setUnitB] = useState(getInitEquipment);
  const [unitC, setUnitC] = useState(getInitEquipment);

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
          <FoodForm />
        </Grid>

        <Grid item md={6}>
          <WeaponForm
            isRealistic={isRealistic}
            charLevel={charLevel}
          />
        </Grid>
        {/* 
        <Grid item md={6}>
          <EquipmentForm
            mode="unit"
            isRealistic={isRealistic}
            charLevel={charLevel}
            onChange={setUnitA}
          />
        </Grid>
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
