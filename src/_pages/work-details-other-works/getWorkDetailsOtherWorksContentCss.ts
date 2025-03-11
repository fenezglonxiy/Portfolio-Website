import { css, Theme } from "@mui/material";

const getWorkDetailsOtherWorksContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(30)} ${theme.spacing(20)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(20)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding: ${theme.spacing(20)} ${theme.spacing(10)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    padding: ${theme.spacing(20)} ${theme.spacing(5)};
  }
`;

export default getWorkDetailsOtherWorksContentCss;
