import { css, Theme } from "@mui/material";

const getMainInsightCardTextCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(4)};
`;

export default getMainInsightCardTextCss;
