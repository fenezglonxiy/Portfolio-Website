import { css, Theme } from "@mui/material";

const getWorkCardMediaCss = (theme: Theme) => css`
  padding: ${theme.spacing(5)} ${theme.spacing(5)} 0;

  & > * {
    height: 320px;
  }
`;

export default getWorkCardMediaCss;
