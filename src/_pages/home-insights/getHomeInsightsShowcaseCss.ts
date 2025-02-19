import { css, Theme } from "@mui/material";

const getHomeInsightsShowcaseCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing(8)};

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    grid-template-columns: 1fr;
  }
`;

export default getHomeInsightsShowcaseCss;
