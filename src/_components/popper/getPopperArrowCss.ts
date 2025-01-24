import { css, Theme } from "@mui/material";

const getPopperArrowCss = (theme: Theme) => css`
  z-index: -1;

  &::after {
    content: "";
    display: block;
    width: 11.3px;
    height: 11.3px;
    border-radius: 2px 0;
    background: ${theme.palette.common.white};
    box-shadow: var(--Popper-shadow);
    pointer-events: none;
  }
`;

export default getPopperArrowCss;
