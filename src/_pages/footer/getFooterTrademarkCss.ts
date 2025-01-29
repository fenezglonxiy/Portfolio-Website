import { css, Theme } from "@mui/material";

const getFooterTrademarkCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(3)};
`;

export default getFooterTrademarkCss;
