import * as Colors from "./Colors";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Colors.NeutralColor;
  }

  interface PaletteOptions {
    neutral: Colors.NeutralColor;
  }
}

const palette = {
  common: {
    black: Colors.black,
    white: Colors.white,
  },

  neutral: Colors.neutral,
};

export default palette;
