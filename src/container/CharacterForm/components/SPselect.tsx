import { Paper, TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { SKILL_POINTS_MAX, SKILL_POINTS_MIN } from "../../../stores";

interface SPSelectProps {
  value: number;
  onChange: (value: number) => void;
}
const SPSelect: FC<SPSelectProps> = (props) => {
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const value = event.target.value;

    let sp = value ? parseInt(value) : SKILL_POINTS_MIN;
    if (sp < SKILL_POINTS_MIN) {
      sp = SKILL_POINTS_MIN;
    } else if (sp > SKILL_POINTS_MAX) {
      sp = SKILL_POINTS_MAX;
    }
    props.onChange(sp);
  };
  return (
    <Paper elevation={4}>
      <TextField
        value={props.value}
        onChange={handleChange}
        fullWidth
        label="Main SP used"
        type="number"
      />
    </Paper>
  );
};
export default SPSelect;
