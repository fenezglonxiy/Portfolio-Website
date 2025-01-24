import { Theme } from "@mui/material";
import { createTheme as createMuiTheme } from "@mui/material/styles";
import createPalette from "./createPalette";
import createBreakpoints from "./createBreakpoints";
import createZIndex from "./createZIndex";
import createSpacing from "./createSpacing";
import createTypography from "./createTypography";
import createShape, { ShapeOptions } from "./createShape";

declare module "@mui/material/styles" {
  interface Theme {
    shape: ShapeOptions;
  }

  interface ThemeOptions {
    shape?: ShapeOptions;
  }
}

const createTheme = (): Theme => {
  const theme = createMuiTheme({
    palette: createPalette,
    breakpoints: createBreakpoints,
    zIndex: createZIndex,
    spacing: createSpacing,
    shape: createShape,
  });

  theme.typography = createTypography(theme);
  return theme;
};

export default createTheme;
