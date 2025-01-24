import { css, Theme } from "@mui/material";

const getMainDetailsRootCss = () => css`
  flex: 1;
`;

const getMainDetailsContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(10)};
`;

const getMainDetailsCss = (theme: Theme) => ({
  root: getMainDetailsRootCss(),
  container: getMainDetailsContainerCss(theme),
});

export default getMainDetailsCss;
