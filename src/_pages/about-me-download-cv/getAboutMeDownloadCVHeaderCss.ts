import { css, Theme } from "@mui/material";

const getAboutMeDownloadCVHeaderCss = (theme: Theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.lg)} {
    ${theme.typography.h3};
  }
`;

export default getAboutMeDownloadCVHeaderCss;
