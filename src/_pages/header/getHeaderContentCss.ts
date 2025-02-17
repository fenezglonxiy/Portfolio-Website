import { css, Theme } from "@mui/material";

const getHeaderContentCss = (theme: Theme) => css`
  position: fixed;
  width: 100%;
  height: 82px;
  top: 0;
  left: 0;
  transition: ease 0.3s;
  z-index: ${theme.zIndex.appBar};
  background-color: ${theme.palette.common.white};
  border-bottom: 1px solid ${theme.palette.neutral[200]};

  ${theme.breakpoints.down(theme.breakpoints.values.lg)} {
    padding: 0 ${theme.spacing(10)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    padding: 0 ${theme.spacing(5)};
  }
`;

export default getHeaderContentCss;
