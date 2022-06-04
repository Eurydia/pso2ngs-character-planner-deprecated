import { ThemeOptions } from "@mui/material";
import { blue } from "@mui/material/colors";

const getThemePalette = (): ThemeOptions => {
  return {
    palette: {
      primary: {
        main: blue["A400"],
        light: blue["A100"],
        dark: blue["800"],
      },
    },
  };
};
export default getThemePalette;
