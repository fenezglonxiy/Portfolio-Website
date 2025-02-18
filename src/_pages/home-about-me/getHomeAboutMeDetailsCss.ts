import { css, Theme } from "@mui/material";

const getHomeAboutMeDetailsCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 65% auto;
  row-gap: ${theme.spacing(8)};

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    grid-template-columns: 1fr;
  }
`;

export default getHomeAboutMeDetailsCss;
