import { css, Theme } from "@mui/material";

const getWorkDetailsContainerRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(18)} ${theme.spacing(25)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(10)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding: ${theme.spacing(10)} ${theme.spacing(5)};
  }
`;

const getWorkDetailsContainerInnerCss = (theme: Theme) => css`
  max-width: 1050px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 195px 1fr;
  gap: ${theme.spacing(20)};

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    grid-template-columns: 1fr;
  }
`;

const getWorkDetailsContainerCss = (theme: Theme) => ({
  root: getWorkDetailsContainerRootCss(theme),
  inner: getWorkDetailsContainerInnerCss(theme),
});

export default getWorkDetailsContainerCss;
