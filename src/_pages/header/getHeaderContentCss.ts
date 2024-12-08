import { css, Theme } from "@mui/material";

const getHeaderContentRootCss = (theme: Theme) => css`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(8)};
  padding: ${theme.spacing(4)} ${theme.spacing(15)};
`;

const getHeaderContentCss = (theme: Theme) => ({
  root: getHeaderContentRootCss(theme),
});

export default getHeaderContentCss;
