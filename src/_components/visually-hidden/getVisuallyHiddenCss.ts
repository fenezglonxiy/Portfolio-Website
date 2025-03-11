import { css } from "@mui/material";

const getVisuallyHiddenCss = () => css`
  position: relative;

  & > a {
    position: absolute;
    inset: 0;
  }
`;

export default getVisuallyHiddenCss;
