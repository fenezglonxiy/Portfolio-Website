import { css, Theme } from "@mui/material";

const getHomeInsightsContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(20)};

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding: ${theme.spacing(20)} ${theme.spacing(10)};
  }
`;

export default getHomeInsightsContentCss;
