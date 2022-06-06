import { ChangeEvent, FC, memo } from "react";
import { Paper, TextField } from "@mui/material";
import { POTENTIAL_MAX, POTENTIAL_MIN } from "../../../stores";

interface PotentialSelectProps {
  isDisabled: boolean;
  value: number;
  onChange: (value: number) => void;
}
const PotentialSelect: FC<PotentialSelectProps> = memo(
  (props) => {
    const handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const value = event.target.value;

      let level: number = value ? parseInt(value) : POTENTIAL_MIN;
      if (level < POTENTIAL_MIN) {
        level = POTENTIAL_MIN;
      } else if (level > POTENTIAL_MAX) {
        level = POTENTIAL_MAX;
      }
      props.onChange(level);
    };
    return (
      <Paper elevation={props.isDisabled ? 0 : 4}>
        <TextField
          disabled={props.isDisabled}
          value={props.value}
          onChange={handleChange}
          fullWidth
          label="Potential Level"
          type="number"
          InputProps={{
            startAdornment: "Lv.",
          }}
        />
      </Paper>
    );
  },
  (prev, next) => {
    if (prev.isDisabled !== next.isDisabled) {
      return false;
    }
    if (prev.value !== next.value) {
      return false;
    }

    return true;
  },
);
export default PotentialSelect;
