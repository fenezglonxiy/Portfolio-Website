import { css, Theme } from "@mui/material";

const getHomeInsightsShowcaseCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${theme.spacing(8)};
`;

export default getHomeInsightsShowcaseCss;
