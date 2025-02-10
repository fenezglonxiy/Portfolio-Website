import { css, Theme } from "@mui/material";

const getWorkCardMediaCss = (theme: Theme) => css`
  height: 340px;
  padding: ${theme.spacing(5)} ${theme.spacing(5)} 0;

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    height: 240px;
  }
`;

export default getWorkCardMediaCss;
