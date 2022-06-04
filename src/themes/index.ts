import { Theme } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import getComponentStyleOverrides from "./components";
import getThemePalette from "./palette";

const getTheme = (): Theme => {
  const theme = createTheme({
    ...getThemePalette(),
    ...getComponentStyleOverrides(),
  });

  return responsiveFontSizes(theme);
};

export default getTheme;
