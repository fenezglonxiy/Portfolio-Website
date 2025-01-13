import { css, Theme } from "@mui/material";

const getInsightsShowcaseContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(24)} ${theme.spacing(28)};
`;

const getInsightsShowcaseContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(24)};
  max-width: 1440px;
  margin: 0 auto;
`;

const getInsightsShowcaseCss = (theme: Theme) => ({
  content: getInsightsShowcaseContentCss(theme),
  container: getInsightsShowcaseContainerCss(theme),
});

export default getInsightsShowcaseCss;
