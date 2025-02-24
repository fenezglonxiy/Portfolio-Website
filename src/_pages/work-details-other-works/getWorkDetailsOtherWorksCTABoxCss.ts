import { css, Theme } from "@mui/material";

const getWorkDetailsOtherWorksCTABoxCss = (theme: Theme) => css`
  ${theme.breakpoints.up(theme.breakpoints.values.sm)} {
    display: none;
  }
`;

export default getWorkDetailsOtherWorksCTABoxCss;
