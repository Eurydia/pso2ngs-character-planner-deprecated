import { ThemeOptions } from "@mui/material";
import {
  amber,
  blue,
  deepOrange,
  deepPurple,
  grey,
  indigo,
  lightBlue,
  orange,
  pink,
  purple,
} from "@mui/material/colors";

const getThemePalette = (): ThemeOptions => {
  return {
    palette: {
      primary: orange,
    },
  };
};
export default getThemePalette;
