"use client";

import createTheme from "./createTheme";
import MUIThemeProvider from "./MUIThemeProvider";

const theme = createTheme();

type ThemeProviderProps = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}

export default ThemeProvider;
