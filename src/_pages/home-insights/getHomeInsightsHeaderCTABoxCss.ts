import { css, Theme } from "@mui/material";

const getHomeInsightsHeaderCTABoxCss = (theme: Theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    display: none;
  }
`;

export default getHomeInsightsHeaderCTABoxCss;
