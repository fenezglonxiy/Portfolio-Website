import { css, Theme } from "@mui/material";

const getAboutMeAchievementsContentRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(20)} ${theme.spacing(18)} ${theme.spacing(10)};
`;

const getAboutMeAchievementsContentContainerCss = (theme: Theme) => css`
  max-width: 1050px;
  margin: 0 auto;
  --flow-spacing-y: ${theme.spacing(20)};
`;

const getAboutMeAchievementsContentCss = (theme: Theme) => ({
  root: getAboutMeAchievementsContentRootCss(theme),
  container: getAboutMeAchievementsContentContainerCss(theme),
});

export default getAboutMeAchievementsContentCss;
