import { css, Theme } from "@mui/material";

const getHomeSelectedWorksHeaderCTABoxCss = (theme: Theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    display: none;
  }
`;

export default getHomeSelectedWorksHeaderCTABoxCss;
