import { ChangeEvent, FC, memo } from "react";
import { MenuItem, Paper, TextField } from "@mui/material";
import CHARACTER_CLASSES, {
  CharacterClassData,
} from "../../../assets/chracter_classes";
interface ClassSearchProps {
  label: string;
  value: CharacterClassData;
  onChange: (value: CharacterClassData) => void;
}
const ClassSearch: FC<ClassSearchProps> = memo(
  (props) => {
    const handleChange = (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const input_value = e.target.value;

      let value = CHARACTER_CLASSES[0];
      for (let i = 1; i < CHARACTER_CLASSES.length - 1; i++) {
        if (CHARACTER_CLASSES[i].name === input_value) {
          value = CHARACTER_CLASSES[i];
          break;
        }
      }
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
