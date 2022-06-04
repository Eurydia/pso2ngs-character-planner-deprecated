import { ChangeEvent, FC, memo } from "react";
import { MenuItem, Paper, TextField } from "@mui/material";
import { CLASS_DATA } from "../../../assets/class_stats";
import { Class } from "../../../types";

interface ClassSearchProps {
  label: string;
  value: Class;
  onChange: (value: Class) => void;
}
const ClassSearch: FC<ClassSearchProps> = memo(
  (props) => {
    const handleChange = (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      let value = CLASS_DATA[0];
      const input_value = e.target.value;
      CLASS_DATA.forEach((c_data) => {
        if (c_data.name === input_value) {
          value = c_data;
          return;
        }
      });

      props.onChange(value);
    };

    return (
      <Paper elevation={4}>
        <TextField
          label={props.label}
          value={props.value.name}
          onChange={handleChange}
          select
          fullWidth
        >
          {CLASS_DATA.map((c) => (
            <MenuItem key={c.name} value={c.name}>
              {c.name.toLowerCase()}
            </MenuItem>
          ))}
        </TextField>
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
export default ClassSearch;
