import { css, Theme } from "@mui/material";

const getHomeAchievementsContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(30)} 0 ${theme.spacing(20)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(20)};
  }
`;

export default getHomeAchievementsContentCss;
