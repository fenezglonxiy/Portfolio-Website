import { css, Theme } from "@mui/material";

const getWorksShowcaseContentCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(14)};
  padding: ${theme.spacing(30)} ${theme.spacing(25)};
  background-color: ${theme.palette.neutral[200]};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(20)} ${theme.spacing(10)};
  }
`;

export default getWorksShowcaseContentCss;
