import { css, Theme } from "@mui/material";

const getInsightCardTextCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(2)};
`;

export default getInsightCardTextCss;
