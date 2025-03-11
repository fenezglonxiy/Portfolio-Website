import { css, Theme } from "@mui/material";

const getHeaderLocalTimeCss = (theme: Theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.lg)} {
    display: none;
  }
`;

export default getHeaderLocalTimeCss;
