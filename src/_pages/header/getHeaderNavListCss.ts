import { css, Theme } from "@mui/material";

const getHeaderNavListCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(7)};
`;

export default getHeaderNavListCss;
