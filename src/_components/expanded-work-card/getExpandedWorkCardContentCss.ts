import { css, Theme } from "@mui/material";

const getExpandedWorkCardContentCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(6)};

  && {
    padding: ${theme.spacing(11)} 0 0 0;
  }

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    && {
      padding: ${theme.spacing(7)} 0 0 0;
    }
  }

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    && {
      padding: ${theme.spacing(6)} 0 0 0;
    }
  }
`;

export default getExpandedWorkCardContentCss;
