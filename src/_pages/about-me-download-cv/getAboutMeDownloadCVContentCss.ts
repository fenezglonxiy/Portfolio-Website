import { css, Theme } from "@mui/material";

const getAboutMeDownloadCVContentCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(6)};
  text-align: center;
  padding: ${theme.spacing(18)} ${theme.spacing(20)};
`;

export default getAboutMeDownloadCVContentCss;
