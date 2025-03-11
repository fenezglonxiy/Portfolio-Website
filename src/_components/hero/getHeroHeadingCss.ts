import { css, Theme } from "@mui/material";

const getHeroHeadingCss = (theme: Theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    ${theme.typography.h2};
  }
`;

export default getHeroHeadingCss;
