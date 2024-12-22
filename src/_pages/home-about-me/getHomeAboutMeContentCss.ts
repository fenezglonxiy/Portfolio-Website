import { css, Theme } from "@mui/material";

const getHomeAboutMeContentRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(18)};
`;

const getHomeAboutMeContentContainerCss = (theme: Theme) => css`
  max-width: 1080px;
  margin: 0 auto;
  --flow-spacing-y: ${theme.spacing(6)};
`;

const getHomeAboutMeContentCss = (theme: Theme) => ({
  root: getHomeAboutMeContentRootCss(theme),
  container: getHomeAboutMeContentContainerCss(theme),
});

export default getHomeAboutMeContentCss;
