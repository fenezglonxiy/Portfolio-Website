"use client";

import {
  Theme,
  ThemeProvider as MUIProvider,
  CssBaseline,
} from "@mui/material";
import React from "react";

import EmotionThemeProvider from "./EmotionThemeProvider";

type MUIThemeProviderProps = {
  theme: Theme;
  children: React.ReactNode;
};

function MUIThemeProvider({ theme, children }: MUIThemeProviderProps) {
  return (
    <MUIProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </EmotionThemeProvider>
    </MUIProvider>
  );
}

export default MUIThemeProvider;
