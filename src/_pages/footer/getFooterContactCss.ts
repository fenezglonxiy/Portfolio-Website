import { css, Theme } from "@mui/material";

const getFooterContactCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(4.5)};
  padding: ${theme.spacing(20)};
  color: ${theme.palette.common.white};
  background-color: ${theme.palette.neutral[800]};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(20)} ${theme.spacing(10)};
  }
`;

export default getFooterContactCss;
