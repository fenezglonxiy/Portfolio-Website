import { css, Theme } from "@mui/material";

const getHomeInsightsContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(18)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(18)} ${theme.spacing(10)};
  }
`;

export default getHomeInsightsContentCss;
