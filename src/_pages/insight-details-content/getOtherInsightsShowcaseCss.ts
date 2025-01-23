import { css, Theme } from "@mui/material";

const getOtherInsightsShowcaseCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(8)};
`;

export default getOtherInsightsShowcaseCss;
