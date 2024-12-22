import { css } from "@mui/material";

const getInfiniteScrollerCss = (animated: boolean) => css`
  ${animated &&
  css`
    overflow: hidden;
  `}
`;

export default getInfiniteScrollerCss;
