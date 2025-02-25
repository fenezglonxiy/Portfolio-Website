import { css, Theme } from "@mui/material";

const getInsightCardCss = (theme: Theme) => css`
  --card-grid-gap: ${theme.spacing(5)};
  --card-content-background-color: ${theme.palette.slate[50]};
  --card-background-color: white;
  --card-border-radius: ${theme.shape.md};
  --pseudo-circle-radius: calc(var(--card-border-radius) / 2);
  height: fit-content;
  display: grid;
  grid-template-rows: 1fr auto auto;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--card-grid-gap);
  padding: ${theme.spacing(3)};
  background-color: var(--card-background-color);
  border-radius: var(--card-border-radius);
`;

export default getInsightCardCss;
