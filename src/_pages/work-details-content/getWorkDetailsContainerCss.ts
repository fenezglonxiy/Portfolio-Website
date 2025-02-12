import { css, Theme } from "@mui/material";

const getWorkDetailsContainerRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(18)} ${theme.spacing(25)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(16)} ${theme.spacing(10)};
  }
`;

const getWorkDetailsContainerInnerCss = (theme: Theme) => css`
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  gap: ${theme.spacing(8)};
`;

const getWorkDetailsContainerCss = (theme: Theme) => ({
  root: getWorkDetailsContainerRootCss(theme),
  inner: getWorkDetailsContainerInnerCss(theme),
});

export default getWorkDetailsContainerCss;
