import { css, Theme } from "@mui/material";

const getWorkServiceBoxCss = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(2)};
`;

export default getWorkServiceBoxCss;
