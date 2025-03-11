import { css, Theme } from "@mui/material";

const getHomeAboutMeCTABoxCss = (theme: Theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    & > a {
      width: 100%;
    }
  }
`;

export default getHomeAboutMeCTABoxCss;
