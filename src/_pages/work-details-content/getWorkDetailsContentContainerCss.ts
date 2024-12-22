import { css, Theme } from "@mui/material";

const getWorkDetailsContentContainerRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(18)} ${theme.spacing(25)};
`;

const getWorkDetailsContentContainerInnerCss = (theme: Theme) => css`
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  gap: ${theme.spacing(8)};
`;

const getWorkDetailsContentContainerCss = (theme: Theme) => ({
  root: getWorkDetailsContentContainerRootCss(theme),
  inner: getWorkDetailsContentContainerInnerCss(theme),
});

export default getWorkDetailsContentContainerCss;
