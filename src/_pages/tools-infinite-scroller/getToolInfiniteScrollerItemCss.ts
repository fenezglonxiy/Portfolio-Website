import { css, Theme } from "@mui/material";

const getToolInfiniteScrollerItemCss = (theme: Theme) => css`
  width: 240px;
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(7.5)} ${theme.spacing(10)};
  border: 1px solid ${theme.palette.neutral[400]};
  border-right: none;
`;

export default getToolInfiniteScrollerItemCss;
