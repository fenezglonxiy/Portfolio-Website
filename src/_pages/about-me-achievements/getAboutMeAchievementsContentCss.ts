import { css, Theme } from "@mui/material";

const getAboutMeAchievementsContentCss = (theme: Theme) => css`
  padding: 0 ${theme.spacing(18)} ${theme.spacing(20)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(20)} ${theme.spacing(10)};
  }
`;

export default getAboutMeAchievementsContentCss;
