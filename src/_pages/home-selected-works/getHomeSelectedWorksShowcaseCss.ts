import { css, Theme } from "@mui/material";

const getHomeSelectedWorksShowcaseCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(6)};
`;

export default getHomeSelectedWorksShowcaseCss;
