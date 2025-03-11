import { css, Theme } from "@mui/material";

const getLetsTalkCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: space-between;
  padding-top: ${theme.spacing(10)};
  gap: ${theme.spacing(6)};

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    grid-template-columns: 1fr;
    padding-top: ${theme.spacing(2)};
  }
`;

export default getLetsTalkCss;
