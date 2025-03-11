import { css, Theme } from "@mui/material";

const getHomeInsightsCTABoxCss = (theme: Theme) => css`
  ${theme.breakpoints.up(theme.breakpoints.values.sm)} {
    display: none;
  }
`;

export default getHomeInsightsCTABoxCss;
