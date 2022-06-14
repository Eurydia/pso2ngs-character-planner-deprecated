import { FC, Fragment, memo, useEffect, useState } from "react";
import { Box, Divider, Grid, Stack } from "@mui/material";
import { Accessibility, AutoAwesome } from "@mui/icons-material";
import {
  Character,
  ClassData,
  getCharacterStatPayload,
} from "../../assets/character";
import CustomCard from "../../components/CustomCard";
import ClassSearch from "./components/ClassSearch";
import CharLevelSelect from "./components/CharLevelSelect";
import SPSelect from "./components/SPselect";
import ClassEditLayout from "./layout/ClassEditLayout";
import StatsList from "../../components/StatsList";
import { StatPayload } from "../../assets/stats";

interface CharacterFormProps {
  getInitValue: () => Character;
  onChange: (value: Character) => void;
}
const CharacterForm: FC<CharacterFormProps> = memo(
  (props) => {
    const {
      level: init_level,
      main_class: init_main_class,
      main_sp: init_main_sp,
      sub_class: init_sub_class,
      sub_sp: init_sub_sp,
    } = props.getInitValue();

    const [level, setLevel] = useState(init_level);
    const [mainClass, setMainClass] = useState(init_main_class);
    const [mainSP, setMainSP] = useState(init_main_sp);
    const [subClass, setSubClass] = useState(init_sub_class);
    const [subSP, setSubSP] = useState(init_sub_sp);
    useEffect(() => {
      props.onChange({
        level,
        main_class: mainClass,
        main_sp: mainSP,
        sub_class: subClass,
        sub_sp: subSP,
      });
    }, [level, mainClass, mainSP, subClass, subSP, props]);

    const handleMainClassChange = (value: ClassData) => {
      if (value.name === subClass.name) {
        setSubClass(mainClass);
        const temp = mainSP;
        setMainSP(subSP);
        setSubSP(temp);
      } else {
        setMainSP(0);
      }

      setMainClass(value);
    };

    const handleSubClassChange = (value: ClassData) => {
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

    const payload = [
      getCharacterStatPayload({
        level,
        main_class: mainClass,
        main_sp: mainSP,
        sub_class: subClass,
        sub_sp: subSP,
      }),
    ];
    return (
      <CustomCard
        frontTitle="Character"
        frontTitleIcon={<Accessibility />}
        frontContent={
          <Stack
            divider={<Divider flexItem />}
            justifyContent="space-between"
            sx={{ height: 250 }}
          >
            <ClassEditLayout
              charLevelSelect={
                <CharLevelSelect value={level} onChange={setLevel} />
              }
              classSearchSlot={
                <ClassSearch
                  label="Main Class"
                  value={mainClass}
                  onChange={handleMainClassChange}
                />
              }
              spSelectSlot={
                <SPSelect value={mainSP} onChange={setMainSP} />
              }
            />
            <ClassEditLayout
              classSearchSlot={
                <ClassSearch
                  label="Sub Class"
                  value={subClass}
                  onChange={handleSubClassChange}
                />
              }
              spSelectSlot={
                <SPSelect value={subSP} onChange={setSubSP} />
              }
            />
          </Stack>
        }
        backTitle="Stats"
        backTitleIcon={<AutoAwesome />}
        backContent={
          <Box sx={{ height: 250, overflowY: "auto" }}>
            <StatsList payloads={payload} />
          </Box>
        }
      />
    );
  },
  (prev, next) => {
    return true;
  },
);
export default CharacterForm;
