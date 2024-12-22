import { css } from "@mui/material";

const getVisuallyHiddenCss = () => css`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  border: 0 !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  word-wrap: nowrap !important;
`;

export default getVisuallyHiddenCss;
