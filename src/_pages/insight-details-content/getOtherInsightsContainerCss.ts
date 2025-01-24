import { css, Theme } from "@mui/material";

const getOtherInsightsContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(16)};
  max-width: 1440px;
  margin: 0 auto;
`;

export default getOtherInsightsContainerCss;
