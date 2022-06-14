import { ChangeEvent, FC, memo } from "react";
import { Paper, TextField } from "@mui/material";
import { CHARACTER_MAX, CHARACTER_MIN } from "../../../stores";

interface CharLevelSelectProps {
  value: number;
  onChange: (value: number) => void;
}
const CharLevelSelect: FC<CharLevelSelectProps> = memo(
  (props) => {
    const handleChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const value = event.target.value;
      let level = value ? parseInt(value) : CHARACTER_MIN;

      if (level < CHARACTER_MIN) {
        level = CHARACTER_MIN;
      } else if (level > CHARACTER_MAX) {
        level = CHARACTER_MAX;
      }

      props.onChange(level);
    };

    return (
      <Paper elevation={4}>
        <TextField
          value={props.value}
          onChange={handleChange}
          fullWidth
          type="number"
          label="Main Class Level"
        />
      </Paper>
    );
  },
  (prev, next) => {
    if (prev.value !== next.value) {
      return false;
    }

    return true;
  },
);
export default CharLevelSelect;
