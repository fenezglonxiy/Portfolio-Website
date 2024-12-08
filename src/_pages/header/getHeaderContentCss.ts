import { css, Theme } from "@mui/material";

const getHeaderContentRootCss = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing(4)} ${theme.spacing(15)};
`;

const getHeaderContentContainerCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(8)};
`;

const getHeaderContentCss = (theme: Theme) => ({
  root: getHeaderContentRootCss(theme),
  container: getHeaderContentContainerCss(theme),
});

export default getHeaderContentCss;
