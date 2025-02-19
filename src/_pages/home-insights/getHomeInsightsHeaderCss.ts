import { css, Theme } from "@mui/material";

const getHomeInsightsHeaderCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    justify-content: center;
  }
`;

export default getHomeInsightsHeaderCss;
