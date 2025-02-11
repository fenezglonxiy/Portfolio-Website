import { css, Theme } from "@mui/material";

const getLetsTalkCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${theme.spacing(10)};
`;

export default getLetsTalkCss;
