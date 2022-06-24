import { ChangeEvent, FC, memo } from "react";
import { Paper, TextField } from "@mui/material";
import { ENHANCEMENT_MIN, ENHANCEMENT_MAX } from "../../../stores";

interface EnhancementSelectProps {
  isDisabled: boolean;
  value: number;
  onChange: (value: number) => void;
}
const EnhancementSelect: FC<EnhancementSelectProps> = memo(
  (props) => {
    const handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const value = event.target.value;

      let level = value ? parseInt(value) : ENHANCEMENT_MIN;
      if (level < ENHANCEMENT_MIN) {
        level = ENHANCEMENT_MIN;
      } else if (level > ENHANCEMENT_MAX) {
        level = ENHANCEMENT_MAX;
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
          label="Enhancement Level"
          type="number"
          InputProps={{
            startAdornment: "+",
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
export default EnhancementSelect;
