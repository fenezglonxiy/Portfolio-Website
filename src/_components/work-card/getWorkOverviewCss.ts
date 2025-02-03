import { css, Theme } from "@mui/material";

const getWorkOverviewCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(7)};
`;

export default getWorkOverviewCss;
