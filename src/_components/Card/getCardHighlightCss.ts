import { css, Theme } from "@mui/material";

const getCardHighlightCss = (theme: Theme) => css`
  --pseudo-circle-radius: calc(var(--card-border-radius) / 2);
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  position: relative;
  padding: ${theme.spacing(3)};
  outline: var(--inverted-card-grid-gap) solid var(--card-background-color);
  border-radius: 0 var(--card-border-radius) 0 0;
  background-color: var(--card-content-background-color);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: calc(var(--pseudo-circle-radius) * 2);
    height: calc(var(--pseudo-circle-radius) * 2);
    border-radius: 100%;
    background-color: transparent;
  }

  &::before {
    top: 0;
    left: 0;
    box-shadow: calc(-1 * var(--pseudo-circle-radius))
      calc(-1 * var(--pseudo-circle-radius)) var(--card-background-color);
  }

  & > div {
    position: absolute;
    left: 0;
    bottom: calc(-1 * var(--inverted-card-grid-gap));
    width: 100%;
    height: var(--inverted-card-grid-gap);
    background-color: var(--card-content-background-color);
  }

  & > span {
    display: grid;
    place-items: center;
    padding: ${theme.spacing(3)} 0;
    ${theme.typography.body1};
    line-height: 24px;
    color: ${theme.palette.neutral[750]};
    font-weight: ${theme.typography.fontWeightMedium};
    background-color: ${theme.palette.indigo[100]};
    border-radius: ${theme.shape["sm"]};
  }

  &::after {
    bottom: calc(-1 * var(--inverted-card-grid-gap));
    right: calc(-2 * var(--pseudo-circle-radius));
    box-shadow: calc(-1 * var(--pseudo-circle-radius))
      var(--pseudo-circle-radius) var(--card-content-background-color);
  }
`;

export default getCardHighlightCss;
