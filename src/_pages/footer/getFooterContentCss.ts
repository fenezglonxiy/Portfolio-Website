import { css, Theme } from "@mui/material";

const getFooterContentCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    grid-template-columns: 1fr;
  }
`;

export default getFooterContentCss;
