import { css, Theme } from "@mui/material";

const getBaseInsightCardCss = (theme: Theme) => css`
  --inverted-card-grid-gap: ${theme.spacing(5)};
`;

export default getBaseInsightCardCss;
