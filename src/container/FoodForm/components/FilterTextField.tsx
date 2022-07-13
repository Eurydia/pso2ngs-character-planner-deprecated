import { ChangeEvent, ChangeEventHandler, FC } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FilterAlt from "@mui/icons-material/FilterAlt";

interface CustomTextFieldInterface {
  value: string;
  onChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
const CustomTextField: FC<CustomTextFieldInterface> = ({
  value,
  onChange,
}) => {
  return (
    <Paper elevation={4}>
      <TextField
        value={value}
        onChange={onChange}
        fullWidth
        variant="outlined"
        label="Filter Items"
        InputProps={{
          startAdornment: <FilterAlt />,
        }}
      />
    </Paper>
  );
};

interface FilterTextFieldProps {
  value: string;
  onChange: (value: string) => void;
}
const FilterTextField: FC<FilterTextFieldProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value.normalize();
    onChange(value);
  };

  return <CustomTextField value={value} onChange={handleChange} />;
};

export default FilterTextField;
