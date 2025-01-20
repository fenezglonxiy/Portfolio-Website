import { css, Theme } from "@mui/material";

import { CardMediaProps } from "./CardMedia";

const getInvertedCardMediaRootCss = (theme: Theme, inverted: boolean) =>
  inverted &&
  css`
    position: relative;
    grid-row: 1 / 3;
    grid-column: 1 / 3;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: calc(var(--pseudo-circle-radius) * 2);
      height: calc(var(--pseudo-circle-radius) * 2);
      border-radius: 100%;
      background-color: transparent;
      z-index: 1;
    }

    &::before {
      left: 0;
      bottom: calc(
        2 * ${theme.spacing(3)} + 2 * ${theme.spacing(3)} + 24px +
          var(--inverted-card-grid-gap)
      );
      box-shadow: calc(-1 * var(--pseudo-circle-radius))
        var(--pseudo-circle-radius) var(--card-background-color);
    }

    &::after {
      left: calc(
        50% + 2 * var(--pseudo-circle-radius) +
          (var(--inverted-card-grid-gap) - 2 * var(--pseudo-circle-radius)) / 2
      );
      bottom: 0;
      transform: translateX(-50%);
      box-shadow: calc(-1 * var(--pseudo-circle-radius))
        var(--pseudo-circle-radius) var(--card-background-color);
    }
  `;

const getCardMediaRootCss = (theme: Theme, inverted: boolean) => css`
  ${getInvertedCardMediaRootCss(theme, inverted)};
`;

const getCardMediaMediaCss = () => css`
  height: 100%;
  border-radius: var(--card-border-radius);
`;

const getCardMediaCss = (
  theme: Theme,
  props: CardMediaProps,
  inverted: boolean
) => ({
  root: getCardMediaRootCss(theme, inverted),
  media: getCardMediaMediaCss(),
});

export default getCardMediaCss;
