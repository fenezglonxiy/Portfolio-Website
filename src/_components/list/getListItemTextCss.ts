import { css, Theme } from "@mui/material";

const getListItemTextCss = (theme: Theme) => css`
  margin: 0 0 0 ${theme.spacing(3)};
`;

export default getListItemTextCss;
