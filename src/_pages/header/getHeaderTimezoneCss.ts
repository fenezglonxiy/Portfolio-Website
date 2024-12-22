import { css, Theme } from "@mui/material";

const getHeaderTimezoneRootCss = (theme: Theme) => css`
  padding-left: ${theme.spacing(7)};
`;

const getHeaderTimezoneCss = (theme: Theme) => ({
  root: getHeaderTimezoneRootCss(theme),
});

export default getHeaderTimezoneCss;
