import { Theme } from "@mui/material";
import { createTheme as createMuiTheme } from "@mui/material/styles";
import createPalette from "./createPalette";
import createBreakpoints from "./createBreakpoints";
import createZIndex from "./createZIndex";
import createSpacing from "./createSpacing";
import createTypography from "./createTypography";

const createTheme = (): Theme => {
  const theme = createMuiTheme({
    palette: createPalette,
    breakpoints: createBreakpoints,
    zIndex: createZIndex,
    spacing: createSpacing,
  });

  theme.typography = createTypography(theme);
  return theme;
};

export default createTheme;
