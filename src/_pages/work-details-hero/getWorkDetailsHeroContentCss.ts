import { css, Theme } from "@mui/material";

const getWorkDetailsHeroContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(10)} ${theme.spacing(18)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(10)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding: ${theme.spacing(10)} ${theme.spacing(5)};
  }
`;

export default getWorkDetailsHeroContentCss;
