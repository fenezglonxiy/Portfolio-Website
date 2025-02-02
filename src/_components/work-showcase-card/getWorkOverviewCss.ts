import { css, Theme } from "@mui/material";

const getWorkOverviewCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(10)};
`;

export default getWorkOverviewCss;
