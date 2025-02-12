import { css, Theme } from "@mui/material";

const getWorkDetailsHeroContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(8)} ${theme.spacing(18)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(8)} ${theme.spacing(10)};
  }
`;

export default getWorkDetailsHeroContentCss;
