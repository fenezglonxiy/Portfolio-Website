import { css, Theme } from "@mui/material";

const getHeaderContainerCss = (theme: Theme) => css`
  height: 100%;
  display: flex;

  ${theme.breakpoints.up(theme.breakpoints.values.lg)} {
    justify-content: center;
  }
`;

export default getHeaderContainerCss;
