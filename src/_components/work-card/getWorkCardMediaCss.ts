import { css, Theme } from "@mui/material";

const getWorkCardMediaCss = (theme: Theme) => css`
  height: 320px;
  padding: ${theme.spacing(5)} ${theme.spacing(5)} 0;
`;

export default getWorkCardMediaCss;
