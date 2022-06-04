import { ChangeEvent, FC, Fragment, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Accessibility,
  SportsBarOutlined,
  ThirtyFpsSelect,
} from "@mui/icons-material";

import { CLASS_DATA } from "../../assets/class_stats";
import { Class, Skill, SkillWithLevel } from "../../types";
import ClassSearch from "./components/ClassSearch";
import CustomCard from "../../components/CustomCard";
import {
  CHARACTER_MAX,
  CHARACTER_MIN,
  SKILL_POINTS_MAX,
  SKILL_POINTS_MIN,
} from "../../stores";
import CharLevelSelect from "./components/CharLevelSelect";

const HUNTER = CLASS_DATA[0];
const FIGHTER = CLASS_DATA[1];

const constainSPSelection = (
  event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
): number => {
  const value = event.target.value;
  let sp = value ? parseInt(value) : SKILL_POINTS_MIN;

  if (sp < SKILL_POINTS_MIN) {
    sp = SKILL_POINTS_MIN;
  } else if (sp > SKILL_POINTS_MAX) {
    sp = SKILL_POINTS_MAX;
  }
  return sp;
};

interface ClassFormProps {
  charLevel: number;
  onCharLevelChange: (value: number) => void;
}
const ClassForm: FC<ClassFormProps> = (props) => {
  const [mainClass, setMainClass] = useState<Class>(HUNTER);
  const [mainSP, setMainSP] = useState(0);

  const [subClass, setSubClass] = useState<Class>(FIGHTER);
  const [subSP, setSubSP] = useState(0);

  const handleMainSPChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const sp = constainSPSelection(event);
    setMainSP(sp);
  };

  const handleSubSPChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const sp = constainSPSelection(event);
    setSubSP(sp);
  };

  const handleMainClassChange = (value: Class) => {
    if (value.name === subClass.name) {
      setSubClass(mainClass);
      // So much work just to swap numbers around
      const temp = mainSP;
      setMainSP(subSP);
      setSubSP(temp);
    } else {
      setMainSP(0);
    }

    setMainClass(value);
  };

  const handleSubClassChange = (value: Class) => {
    if (value.name === mainClass.name) {
      setMainClass(subClass);

      const temp = subSP;
      setSubSP(mainSP);
      setMainSP(temp);
    } else {
      setSubSP(0);
    }
    setSubClass(value);
  };

  return (
    <CustomCard
      frontTitle="Character"
      frontTitleIcon={<Accessibility />}
      frontContent={
        <Stack spacing={4} divider={<Divider flexItem />}>
          <Box>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <CharLevelSelect
                  value={props.charLevel}
                  onChange={props.onCharLevelChange}
                />
              </Grid>
              <Grid item md={6}></Grid>
              <Grid item md={6}>
                <ClassSearch
                  label="Main Class"
                  value={mainClass}
                  onChange={handleMainClassChange}
                />
              </Grid>
              <Grid item md={6}>
                <Paper elevation={4}>
                  <TextField
                    value={mainSP}
                    onChange={handleMainSPChange}
                    fullWidth
                    label="Main SP"
                    type="number"
                  />
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <ClassSearch
                  label="Sub Class"
                  value={subClass}
                  onChange={handleSubClassChange}
                />
              </Grid>
              <Grid item md={6}>
                <Paper elevation={4}>
                  <TextField
                    value={subSP}
                    onChange={handleSubSPChange}
                    fullWidth
                    label="Sub SP"
                    type="number"
                  />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      }
      backTitle=""
      backTitleIcon={<Fragment />}
      backContent={<Fragment />}
    />
  );
};
export default ClassForm;
