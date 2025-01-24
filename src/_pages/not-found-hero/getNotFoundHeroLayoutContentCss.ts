import { css, Theme } from "@mui/material";

const getNotFoundHeroLayoutContentCss = (theme: Theme) => css`
  max-width: 1008px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(32)};
`;

export default getNotFoundHeroLayoutContentCss;
