import { css, Theme } from "@mui/material";

const getWorkDetailsOtherWorksContentRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(30)} ${theme.spacing(20)};
`;

const getWorkDetailsOtherWorksContentContainerCss = (theme: Theme) => css`
  max-width: 1050px;
  margin: 0 auto;
  --flow-spacing-y: ${theme.spacing(12)};
`;

const getWorkDetailsOtherWorksContentCss = (theme: Theme) => ({
  root: getWorkDetailsOtherWorksContentRootCss(theme),
  container: getWorkDetailsOtherWorksContentContainerCss(theme),
});

export default getWorkDetailsOtherWorksContentCss;
