import { css, menuClasses, Theme } from "@mui/material";

const getBurgerNavMenuCss = (theme: Theme) => css`
  .${menuClasses.paper} {
    overflow: hidden;
    max-height: none;
    min-height: auto;
    max-width: none;
    min-width: auto;
    width: 100%;
    top: 82px !important;
    left: 0 !important;
    color: ${theme.palette.common.white};
    background-color: ${theme.palette.neutral[900]};
    border-radius: 0;
  }

  .${menuClasses.list} {
    padding: ${theme.spacing(10)} !important;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing(10)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    .${menuClasses.paper} {
      top: 74px !important;
    }
  }
`;

export default getBurgerNavMenuCss;
