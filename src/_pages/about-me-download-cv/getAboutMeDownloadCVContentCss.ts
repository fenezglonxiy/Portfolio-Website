import { css, Theme } from "@mui/material";

const getAboutMeDownloadCVContentCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(6)};
  text-align: center;
  padding: ${theme.spacing(20)} 0;
  background-color: ${theme.palette.neutral[200]};
`;

export default getAboutMeDownloadCVContentCss;
