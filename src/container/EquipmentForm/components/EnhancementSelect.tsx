import { ChangeEvent, FC, memo } from "react";
import { Paper, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ENHANCEMENT_MIN, ENHNACEMENT_MAX } from "../../../stores";

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
      } else if (level > ENHNACEMENT_MAX) {
        level = ENHNACEMENT_MAX;
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
            startAdornment: <Add fontSize="small" />,
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
