import { css, Theme } from "@mui/material";

const getSideDetailsRootCss = () => css`
  flex: 1 1 315px;
  max-width: 315px;
`;

const getSideDetailsContainerCss = (theme: Theme) =>
  css`
    --flow-spacing-y: ${theme.spacing(8)};
  `;

const getSideDetailsCss = (theme: Theme) => ({
  root: getSideDetailsRootCss(),
  container: getSideDetailsContainerCss(theme),
});

export default getSideDetailsCss;
