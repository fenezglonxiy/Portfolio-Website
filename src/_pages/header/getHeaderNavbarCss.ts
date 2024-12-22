import { css, Theme } from "@mui/material";

const getHeaderNavbarRootCss = (theme: Theme) => css``;

const getHeaderNavListCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(7)};
`;

const getHeaderNavbarCss = (theme: Theme) => ({
  root: getHeaderNavbarRootCss(theme),
  navList: getHeaderNavListCss(theme),
});

export default getHeaderNavbarCss;
