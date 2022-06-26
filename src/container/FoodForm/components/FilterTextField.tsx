import { ChangeEvent, FC, memo } from "react";
import { Paper, TextField } from "@mui/material";
import { FilterAlt } from "@mui/icons-material";

interface FilterTextFieldProps {
  value: string;
  onChange: (value: string) => void;
}
const FilterTextField: FC<FilterTextFieldProps> = memo(
  (props) => {
    const handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const value = event.target.value.normalize();
      props.onChange(value);
    };
    return (
      <Paper elevation={4}>
        <TextField
          value={props.value}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          label="Filter Items"
          InputProps={{
            startAdornment: <FilterAlt />,
          }}
        />
      </Paper>
    );
  },
  (prev, next) => {
    return false;
  },
);
export default FilterTextField;
