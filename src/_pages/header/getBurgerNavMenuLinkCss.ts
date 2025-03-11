import { css, Theme } from "@mui/material";

const getBurgerNavMenuLinkCss = (theme: Theme) => css`
  ${theme.typography.h3};

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    ${theme.typography.h4};
  }
`;

export default getBurgerNavMenuLinkCss;
