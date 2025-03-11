import { css, Theme } from "@mui/material";

const getHeaderLetsTalkCss = (theme: Theme) => css`
  padding-left: ${theme.spacing(7)};
  display: flex;
  gap: ${theme.spacing(8)};

  ${theme.breakpoints.down(theme.breakpoints.values.lg)} {
    padding-left: 0;
  }

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    display: none;
  }
`;

export default getHeaderLetsTalkCss;
