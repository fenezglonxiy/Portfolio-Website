import { css, Theme } from "@mui/material";

const getHeaderTimezoneCss = (theme: Theme) => css`
  padding-left: ${theme.spacing(7)};
`;

export default getHeaderTimezoneCss;
