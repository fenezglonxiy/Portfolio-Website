import { css, Theme } from "@mui/material";

const getFooterNavCss = (theme: Theme) => css`
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing(20)};
  padding: ${theme.spacing(20)};
`;

export default getFooterNavCss;
