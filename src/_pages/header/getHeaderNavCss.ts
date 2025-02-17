import { css, Theme } from "@mui/material";

const getHeaderNavCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(8)};

  ${theme.breakpoints.down(theme.breakpoints.values.lg)} {
    width: 100%;
    justify-content: space-between;
  }
`;

export default getHeaderNavCss;
