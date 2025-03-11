import { css, Theme } from "@mui/material";

const getWorkOverviewCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(10)};

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    grid-template-columns: 1fr;
    gap: ${theme.spacing(6)};
  }
`;

export default getWorkOverviewCss;
