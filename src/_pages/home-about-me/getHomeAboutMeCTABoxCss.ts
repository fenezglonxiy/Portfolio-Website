import { css, Theme } from "@mui/material";

const getHomeAboutMeCTABoxCss = (theme: Theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    grid-column: 1 / 3;

    & > a {
      width: 100%;
    }
  }
`;

export default getHomeAboutMeCTABoxCss;
