import { css, Theme } from "@mui/material";

const getFooterNavListCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(5)};
`;

export default getFooterNavListCss;
