import { css, Theme } from "@mui/material";

const getHomeSelectedWorksCTABoxCss = (theme: Theme) => css`
  ${theme.breakpoints.up(theme.breakpoints.values.sm)} {
    display: none;
  }
`;

export default getHomeSelectedWorksCTABoxCss;
