import { ZIndexOptions } from "@mui/material/styles/zIndex";

declare module "@mui/material/styles/zIndex" {
  interface ZIndex {
    header: number;
    pageTransition: number;
  }
}

const zIndex: ZIndexOptions = {
  mobileStepper: 1000,
  speedDial: 2000,
  appBar: 3000,
  drawer: 4000,
  modal: 10000,
  snackbar: 10100,
  tooltip: 11000,
  header: 12000,
  pageTransition: 100000,
};

export default zIndex;
