import { css, Theme } from "@mui/material";

const getHomeSelectedWorksCss = (theme: Theme) => css`
  background-color: ${theme.palette.neutral[200]};
`;

export default getHomeSelectedWorksCss;
