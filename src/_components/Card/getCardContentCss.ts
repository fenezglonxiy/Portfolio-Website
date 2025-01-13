import { css, Theme } from "@mui/material";

import { CardContentProps } from "./CardContent";

const getInvertedCardContentCss = (theme: Theme, inverted: boolean) =>
  inverted &&
  css`
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    padding: ${theme.spacing(5)} ${theme.spacing(8)};
    background-color: var(--card-content-background-color);
    border-radius: 0 var(--card-border-radius) var(--card-border-radius)
      var(--card-border-radius);
  `;

const getCardContentCss = (
  theme: Theme,
  props: CardContentProps,
  inverted?: boolean
) => css`
  ${getInvertedCardContentCss(theme, inverted as boolean)}
`;

export default getCardContentCss;
