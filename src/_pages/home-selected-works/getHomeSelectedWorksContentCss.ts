import { css, Theme } from "@mui/material";

const getHomeSelectedWorksContentRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(30)} ${theme.spacing(20)};
`;

const getHomeSelectedWorksContentContainerCss = (theme: Theme) => css`
  max-width: 1050px;
  margin-inline: auto;
  --flow-spacing-y: ${theme.spacing(12)};
`;

const getHomeSelectedWorksContentCss = (theme: Theme) => ({
  root: getHomeSelectedWorksContentRootCss(theme),
  container: getHomeSelectedWorksContentContainerCss(theme),
});

export default getHomeSelectedWorksContentCss;
