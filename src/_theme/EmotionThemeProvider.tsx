"use client";

import { Theme, ThemeProvider } from "@mui/material";
import React from "react";

type EmotionThemeProviderProps = {
  theme: Theme;
  children: React.ReactNode;
};

function EmotionThemeProvider({ theme, children }: EmotionThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default EmotionThemeProvider;
