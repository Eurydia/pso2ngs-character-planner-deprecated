import { ChangeEvent, FC, memo } from "react";
import { MenuItem, Paper, TextField } from "@mui/material";
import CHARACTER_CLASSES, {
  ClassData,
} from "../../../assets/character";

interface ClassSearchProps {
  label: string;
  value: ClassData;
  onChange: (value: ClassData) => void;
}
const ClassSearch: FC<ClassSearchProps> = memo(
  (props) => {
    const handleChange = (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const value = e.target.value;

      let selected = CHARACTER_CLASSES[0];
      for (const char_class of CHARACTER_CLASSES) {
        if (char_class.name === value) {
          selected = char_class;
          break;
        }
      }
      props.onChange(selected);
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
          {CHARACTER_CLASSES.map((char_class) => (
            <MenuItem key={char_class.name} value={char_class.name}>
              {char_class.name.toLowerCase()}
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
