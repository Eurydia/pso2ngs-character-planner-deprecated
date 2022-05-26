import { Theme } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import getThemePalette from "./palette";

const getTheme = (): Theme => {
  const theme = createTheme({
    ...getThemePalette(),
  });

  return responsiveFontSizes(theme);
};

export default getTheme;
