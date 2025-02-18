import { collapseClasses, css, menuClasses, Theme } from "@mui/material";

const getBurgerNavMenuCss = (theme: Theme) => css`
  .${collapseClasses.root} {
    position: absolute;
    top: 82px;
    width: 100%;
  }

  .${menuClasses.paper} {
    overflow: hidden;
    position: static;
    max-height: none;
    min-height: auto;
    max-width: none;
    min-width: auto;
    width: 100%;
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
    .${collapseClasses.root} {
      top: 74px;
    }
  }
`;

export default getBurgerNavMenuCss;
