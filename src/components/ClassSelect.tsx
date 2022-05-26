import { MenuItem, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/system/colorManipulator";
import { ChangeEvent, FC } from "react";

import { CLASS_DATA } from "../assets/class_data";
import { Class } from "../types";

interface ClassSelctProps {
  label: string;
  value: Class;
  onChange: (value: Class) => void;
}
const ClassSelect: FC<ClassSelctProps> = (props) => {
  const theme = useTheme();

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const input_value = e.target.value;

    let value = CLASS_DATA[0];
    CLASS_DATA.forEach((c_data) => {
      if (c_data.name === input_value) {
        value = c_data;
      }
    });

    props.onChange(value);
  };
  return (
    <TextField
      label={props.label}
      value={props.value.name}
      onChange={handleChange}
      select
      fullWidth
      variant="filled"
    >
      {CLASS_DATA.map((c) => (
        <MenuItem
          key={c.name}
          value={c.name}
          sx={{
            ":hover": {
              backgroundColor: alpha(
                theme.palette.primary.main,
                0.15,
              ),
            },
          }}
        >
          {c.name.toLowerCase()}
        </MenuItem>
      ))}
    </TextField>
  );
};
export default ClassSelect;
