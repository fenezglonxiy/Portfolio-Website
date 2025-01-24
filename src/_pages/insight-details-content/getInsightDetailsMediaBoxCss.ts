import { css, Theme } from "@mui/material";

const getInsightDetailsMediaBoxCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(4)};
`;

export default getInsightDetailsMediaBoxCss;
