import { css, Theme } from "@mui/material";

const getInsightCardContentCss = (theme: Theme) => css`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  padding: ${theme.spacing(5)} ${theme.spacing(8)};
  background-color: var(--card-content-background-color);
  border-radius: 0 var(--card-border-radius) var(--card-border-radius)
    var(--card-border-radius);
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export default getInsightCardContentCss;
