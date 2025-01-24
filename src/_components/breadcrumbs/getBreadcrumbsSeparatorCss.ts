import { css, Theme } from "@mui/material";

const getBreadcrumbsSeparatorCss = (theme: Theme) => css`
  font-size: 6px;
  color: ${theme.palette.slate[300]};
`;

export default getBreadcrumbsSeparatorCss;
