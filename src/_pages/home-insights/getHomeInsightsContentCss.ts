import { css, Theme } from "@mui/material";

const getHomeInsightsContentRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(18)};
`;

const getHomeInsightsContentContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(14)};
  max-width: 1440px;
  margin: 0 auto;
`;

const getHomeInsightsContentCss = (theme: Theme) => ({
  root: getHomeInsightsContentRootCss(theme),
  container: getHomeInsightsContentContainerCss(theme),
});

export default getHomeInsightsContentCss;
