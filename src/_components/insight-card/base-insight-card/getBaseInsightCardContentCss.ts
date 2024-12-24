import { css, Theme } from "@mui/material";

const getBaseInsightCardContentCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(2)};

  && {
    padding: ${theme.spacing(8)} 0 0 0;
  }
`;

export default getBaseInsightCardContentCss;
