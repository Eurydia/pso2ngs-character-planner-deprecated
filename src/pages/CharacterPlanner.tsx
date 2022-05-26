import EquipmentFormGroup from "../container/EquipmentFormGroup";
import { Stack, Slider, Grid, Container } from "@mui/material";
import FoodSelectGroup from "../container/FoodFormGroup";
import ClassSkillFormGroup from "../container/ClassSkillFormGroup";

const getEquipmentFormGroups = () => {
  let forms: JSX.Element[] = [];
  for (let i = 0; i < 4; i++) {
    const label = i === 0 ? "weapon" : "unit";
    forms.push(
      <Grid item xs={6} key={`${label} ${i}`}>
        <EquipmentFormGroup
          label={label}
          mode={i === 0 ? "weapon" : "unit"}
        />
      </Grid>,
    );
  }
  return forms;
};

const CharacterPlanner = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <ClassSkillFormGroup />
        </Grid>
        <Grid item xs={5}>
          <FoodSelectGroup />
        </Grid>
        {getEquipmentFormGroups()}
      </Grid>
    </Container>
  );
};
export default CharacterPlanner;
