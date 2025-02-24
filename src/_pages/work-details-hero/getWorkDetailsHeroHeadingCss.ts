import { css, Theme } from "@mui/material";

const getWorkDetailsHeroHeadingCss = (theme: Theme) => css`
  ${theme.typography.h3};

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    ${theme.typography.h4};
  }
`;

export default getWorkDetailsHeroHeadingCss;
