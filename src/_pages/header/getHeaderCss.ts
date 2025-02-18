import { css, Theme } from "@mui/material";

const getHeaderCss = (theme: Theme) => css`
  height: 82px;

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    height: 74px;
  }
`;

export default getHeaderCss;
