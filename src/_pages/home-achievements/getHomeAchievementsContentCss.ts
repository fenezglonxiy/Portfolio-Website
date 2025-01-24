import { css, Theme } from "@mui/material";

const getHomeAchievementsContentRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(30)} 0 ${theme.spacing(20)};
`;

const getHomeAchievementsContentContainerCss = (theme: Theme) => css`
  max-width: 1050px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${theme.spacing(8)};
`;

const getHomeAchievementsContentCss = (theme: Theme) => ({
  root: getHomeAchievementsContentRootCss(theme),
  container: getHomeAchievementsContentContainerCss(theme),
});

export default getHomeAchievementsContentCss;
