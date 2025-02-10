import { css, Theme } from "@mui/material";

const getHeroContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(20)} ${theme.spacing(18)} ${theme.spacing(35)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(20)} ${theme.spacing(10)};
  }
`;

export default getHeroContentCss;
