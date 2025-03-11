import { css, Theme } from "@mui/material";

const getAboutMeAchievementsShowcaseCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: auto 70%;
  gap: ${theme.spacing(10)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    grid-template-columns: 1fr;
  }
`;

export default getAboutMeAchievementsShowcaseCss;
