import * as Colors from "./Colors";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Colors.NeutralColor;
    slate: Colors.SlateColor;
    indigo: Colors.IndigoColor;
  }

  interface PaletteOptions {
    neutral: Colors.NeutralColor;
    slate: Colors.SlateColor;
    indigo: Colors.IndigoColor;
  }
}

const palette = {
  common: {
    black: Colors.black,
    white: Colors.white,
  },

  neutral: Colors.neutral,

  slate: Colors.slate,

  indigo: Colors.indigo,
};

export default palette;
