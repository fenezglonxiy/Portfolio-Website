import { css, Theme } from "@mui/material";

const getSubInsightCardCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(5)};
  position: relative;
`;

export default getSubInsightCardCss;
