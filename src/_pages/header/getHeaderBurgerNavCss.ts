import { css, Theme } from "@mui/material";

const getHeaderBurgerNavCss = (theme: Theme) => css`
  & > button i {
    font-size: 1.5em;
  }

  ${theme.breakpoints.up(theme.breakpoints.values.lg)} {
    display: none;
  }

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    & > button i {
      font-size: 1.25em;
    }
  }
`;

export default getHeaderBurgerNavCss;
