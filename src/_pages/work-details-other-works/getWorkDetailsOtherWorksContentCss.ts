import { css, Theme } from "@mui/material";

const getWorkDetailsOtherWorksContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(30)} ${theme.spacing(20)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(20)} ${theme.spacing(8)};
  }
`;

export default getWorkDetailsOtherWorksContentCss;
