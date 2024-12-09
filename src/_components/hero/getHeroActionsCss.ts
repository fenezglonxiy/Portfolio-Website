import { css, Theme } from "@mui/material";

const getHeroActionsCss = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(6)};
`;

export default getHeroActionsCss;
