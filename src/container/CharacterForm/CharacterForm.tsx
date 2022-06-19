import { FC, Fragment, memo, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Accessibility, AutoAwesome } from "@mui/icons-material";
import {
  Character,
  ClassData,
  getCharacterStatPayload,
} from "../../assets/character";
import StatsList from "../../components/StatsList";
import ClassSearch from "./components/ClassSearch";
import CharLevelSelect from "./components/CharLevelSelect";
import SPSelect from "./components/SPselect";
import ClassEditLayout from "./layout/ClassEditLayout";
import { tallyStats } from "../../utility";

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

    const [dialogOpen, setDialogOpen] = useState(false);
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
    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const stats_as_template = tallyStats(
      getCharacterStatPayload({
        level,
        main_class: mainClass,
        main_sp: mainSP,
        sub_class: subClass,
        sub_sp: subSP,
      }).stats,
    );

    return (
      <Fragment>
        <Card variant="outlined">
          <CardHeader
            title={
              <Stack direction="row" spacing={1} alignItems="center">
                <Accessibility color="primary" />
                <Typography variant="h6" color="primary">
                  Character
                </Typography>
              </Stack>
            }
          />
          <CardContent>
            <Stack spacing={4} divider={<Divider flexItem />}>
              <ClassEditLayout
                charLevelSelect={
                  <CharLevelSelect
                    value={level}
                    onChange={setLevel}
                  />
                }
                classSearchSlot={
                  <ClassSearch
                    label="Main Class"
                    value={mainClass}
                    onChange={handleMainClassChange}
                  />
                }
                spSelectSlot={
                  <SPSelect
                    label="Main SP"
                    value={mainSP}
                    onChange={setMainSP}
                  />
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
                  <SPSelect
                    label="Sub SP"
                    value={subSP}
                    onChange={setSubSP}
                  />
                }
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Button
              onClick={openDialog}
              variant="contained"
              startIcon={<AutoAwesome />}
            >
              view stats
            </Button>
          </CardActions>
        </Card>
        <Dialog
          open={dialogOpen}
          onClose={closeDialog}
          fullWidth
          maxWidth="sm"
          scroll="body"
        >
          <DialogTitle>
            <Stack direction="row" spacing={1} alignItems="center">
              <AutoAwesome color="primary" />
              <Typography variant="h6" color="primary">
                Character Stats
              </Typography>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <StatsList stats={stats_as_template} />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>close</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  },
  (prev, next) => {
    return true;
  },
);
export default CharacterForm;
