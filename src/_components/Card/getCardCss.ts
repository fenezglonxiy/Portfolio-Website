import { css, Theme } from "@mui/material";

import { CardProps } from "./Card";

const getInvertedCardCss = (theme: Theme, inverted: CardProps["inverted"]) =>
  inverted &&
  css`
    --inverted-card-grid-gap: ${theme.spacing(5)};
    --card-content-background-color: ${theme.palette.slate[50]};
    display: grid;
    grid-template-rows: 1fr auto auto;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--inverted-card-grid-gap);
    padding: ${theme.spacing(3)};
  `;

const getCardCss = (theme: Theme, props: CardProps) => css`
  --card-background-color: white;
  --card-border-radius: ${theme.shape[
    props.borderRadius as NonNullable<CardProps["borderRadius"]>
  ]};
  --pseudo-circle-radius: calc(var(--card-border-radius) / 2);
  position: relative;
  background-color: var(--card-background-color);
  border-radius: var(--card-border-radius);
  ${getInvertedCardCss(theme, props.inverted)};
`;

export default getCardCss;
