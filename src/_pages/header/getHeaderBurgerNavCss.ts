import { css, Theme } from "@mui/material";

const getHeaderBurgerNavCss = (theme: Theme) => css`
  & > button i {
    font-size: 1.5em;
  }

  ${theme.breakpoints.up(theme.breakpoints.values.lg)} {
    display: none;
  }
`;

export default getHeaderBurgerNavCss;
