"use client";

import {
  Theme,
  ThemeProvider as MUIProvider,
  CssBaseline,
} from "@mui/material";
import React from "react";
import EmotionThemeProvider from "./EmotionThemeProvider";

type ThemeProviderProps = {
  theme: Theme;
  children: React.ReactNode;
};

function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <MUIProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </EmotionThemeProvider>
    </MUIProvider>
  );
}

export default ThemeProvider;
