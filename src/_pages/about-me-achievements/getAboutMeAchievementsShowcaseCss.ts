import { css, Theme } from "@mui/material";

const getAboutMeAchievementsShowcaseCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: auto 70%;
  column-gap: ${theme.spacing(10)};
`;

export default getAboutMeAchievementsShowcaseCss;
