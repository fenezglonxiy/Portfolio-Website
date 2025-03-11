import { css, Theme } from "@mui/material";

const getHomeInsightsContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(14)};
  max-width: 1440px;
  margin: 0 auto;
`;

export default getHomeInsightsContainerCss;
