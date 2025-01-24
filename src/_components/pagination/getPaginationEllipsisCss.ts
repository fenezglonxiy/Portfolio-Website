import { css } from "@mui/material";

const getPaginationEllipsisRootCss = () => css`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getPaginationEllipsisMoreCss = () => css`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;

  & i {
    font-weight: inherit;
    color: inherit;
  }
`;

const getPaginationEllipsisCss = () => ({
  root: getPaginationEllipsisRootCss(),
  more: getPaginationEllipsisMoreCss(),
});

export default getPaginationEllipsisCss;
