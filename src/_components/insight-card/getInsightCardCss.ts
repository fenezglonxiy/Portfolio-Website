import { css, Theme } from "@mui/material";

const getInsightCardCss = (theme: Theme) => css`
  --inverted-card-grid-gap: ${theme.spacing(5)};
  height: fit-content;
`;

export default getInsightCardCss;
