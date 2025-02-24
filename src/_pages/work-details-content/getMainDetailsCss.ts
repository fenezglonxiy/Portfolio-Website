import { css, Theme } from "@mui/material";

const getMainDetailsContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(10)};
`;

const getMainDetailsCss = (theme: Theme) => ({
  container: getMainDetailsContainerCss(theme),
});

export default getMainDetailsCss;
