import { css, Theme } from "@mui/material";

const getHomeAboutMeContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(18)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(18)} ${theme.spacing(10)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.lg)} {
    padding: ${theme.spacing(14)} ${theme.spacing(10)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    padding: ${theme.spacing(10)} ${theme.spacing(5)};
  }
`;

export default getHomeAboutMeContentCss;
