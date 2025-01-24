import { css, Theme } from "@mui/material";

const getHomeInsightCardContentCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};

  && {
    padding: ${theme.spacing(8)} 0 0 0;
  }
`;

export default getHomeInsightCardContentCss;
