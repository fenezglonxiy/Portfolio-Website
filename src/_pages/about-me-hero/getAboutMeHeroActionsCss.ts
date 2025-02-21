import { css, Theme } from "@mui/material";

const getAboutMeHeroActionsCss = (theme: Theme) => css`
  ${theme.breakpoints.up(theme.breakpoints.values.md)} {
    width: fit-content;
  }
`;

export default getAboutMeHeroActionsCss;
