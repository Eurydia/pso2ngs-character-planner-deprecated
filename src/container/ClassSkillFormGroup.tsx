import {
  Card,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { CLASS_DATA } from "../assets/class_data";
import ClassSelect from "../components/ClassSelect";
import { Class, Skill } from "../types";

const MIN_SP_SPENT = 0;

interface ClassSkillItemProps {
  skill: Skill;
  value: number;
  onChange: (value: number, name: string) => void;
}
const ClassSkillItem: FC<ClassSkillItemProps> = (props) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let value = parseInt(e.target.value);
    if (value > props.skill.max_level) {
      value = props.skill.max_level;
    } else if (value < MIN_SP_SPENT) {
      value = MIN_SP_SPENT;
    }
    props.onChange(value, props.skill.name);
  };
  return (
    <Grid
      container
      sx={{
        paddingY: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={8}>
        <Typography>{props.skill.name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={props.value}
          onChange={handleChange}
          type="number"
          label="SP"
          size="small"
        />
      </Grid>
    </Grid>
  );
};

const getSkillObject = (class_data: Class) => {
  let res: { [keys: string]: number } = {};
  class_data.non_damaging_skills.forEach((skill) => {
    res[skill.name] = 0;
  });
  return res;
};

const getSPSpent = (skill_object: {
  [keys: string]: number;
}): number => {
  let res = 0;
  for (const v of Object.values(skill_object)) {
    res += v;
  }
  return res;
};

interface ClassSkillFormGroupProps {}
const ClassSkillFormGroup: FC<ClassSkillFormGroupProps> = (props) => {
  const [mainClass, setMainClass] = useState<Class>(CLASS_DATA[0]);
  const [subClass, setSubClass] = useState<Class>(CLASS_DATA[1]);

  const [mainSP, setMainSP] = useState(0);
  const [subSP, setSubSP] = useState(0);

  const [mainSkills, setMainSkills] = useState<{
    [keys: string]: number;
  }>(getSkillObject(CLASS_DATA[0]));
  const [subSkills, setSubSkills] = useState<{
    [keys: string]: number;
  }>({});

  const handleMainClassChange = (value: Class) => {
    // swich main class and subclass
    if (value === subClass) {
      setSubSkills({ ...mainSkills });
      setSubClass(mainClass);
    }
    setMainSkills(getSkillObject(value));
    setMainClass(value);
  };

  const handleSubClassChange = (value: Class) => {
    if (value === mainClass) {
      setMainSkills({ ...subSkills });
      setMainClass(subClass);
    }
    setSubSkills(getSkillObject(value));
    setSubClass(value);
  };

  const handleMainSkillValueChange = (
    value: number,
    skill_name: string,
  ) => {
    setMainSkills((prev) => {
      if (!value) value = MIN_SP_SPENT;
      let next = { ...prev };
      next[skill_name] = value;
      return next;
    });
  };

  const handleSubSkillValueChange = (
    value: number,
    skill_name: string,
  ) => {
    setSubSkills((prev) => {
      if (!value) value = MIN_SP_SPENT;
      let next = { ...prev };
      next[skill_name] = value;
      return next;
    });
  };
  const min_main_sp = getSPSpent(mainSkills);
  if (mainSP < min_main_sp) {
    setMainSP(min_main_sp);
  }

  return (
    <Card variant="outlined">
      <Stack
        divider={<Divider flexItem />}
        spacing={2}
        sx={{
          padding: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <TextField
              type="number"
              variant="filled"
              label="main class level"
              defaultValue={45}
            />
          </Grid>
          <Grid item xs={6}>
            {/* empty cell */}
          </Grid>
          <Grid item xs={6}>
            <ClassSelect
              label="main class"
              value={mainClass}
              onChange={handleMainClassChange}
            />
          </Grid>
          <Grid item xs={6}>
            <ClassSelect
              label="sub class"
              value={subClass}
              onChange={handleSubClassChange}
            />
          </Grid>
        </Grid>
        <Stack spacing={1}>
          <TextField
            value={mainSP}
            type="number"
            variant="filled"
            label="main class SP spent"
            sx={{
              width: 0.4,
            }}
          />
          <Stack sx={{ maxHeight: 150, overflowY: "auto" }}>
            {mainClass.non_damaging_skills.map((skill) => (
              <Card
                key={skill.name}
                variant="outlined"
                sx={{
                  width: 0.8,
                }}
              >
                <ClassSkillItem
                  skill={skill}
                  value={mainSkills[skill.name]}
                  onChange={handleMainSkillValueChange}
                />
              </Card>
            ))}
          </Stack>
        </Stack>
        <Stack spacing={1}>
          <TextField
            type="number"
            variant="filled"
            label="sub class SP spent"
            sx={{ width: 0.4 }}
          />
          <Stack sx={{ maxHeight: 150, overflowY: "auto" }}>
            {subClass.non_damaging_skills.map((skill) => (
              <Card
                key={skill.name}
                variant="outlined"
                sx={{
                  width: 0.8,
                }}
              >
                <ClassSkillItem
                  skill={skill}
                  value={subSkills[skill.name]}
                  onChange={handleSubSkillValueChange}
                />
              </Card>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};
export default ClassSkillFormGroup;
