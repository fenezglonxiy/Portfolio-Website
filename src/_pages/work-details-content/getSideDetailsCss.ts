import { css, Theme } from "@mui/material";

const getSideDetailsRootCss = () => css`
  flex: 1 1 315px;
  max-width: 315px;
`;

const getSideDetailsContentCss = (theme: Theme) =>
  css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(8)};
  `;

const getSideDetailsCss = (theme: Theme) => ({
  root: getSideDetailsRootCss(),
  content: getSideDetailsContentCss(theme),
});

export default getSideDetailsCss;
