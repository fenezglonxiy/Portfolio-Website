import { cardMediaClasses, css, Theme } from "@mui/material";

const getInsightCardMediaCss = (theme: Theme) => css`
  height: 220px;
  position: relative;
  grid-row: 1 / 3;
  grid-column: 1 / 3;

  .${cardMediaClasses.root} {
    border-radius: var(--card-border-radius) var(--card-border-radius)
      var(--card-border-radius) 0;
  }

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
        var(--card-grid-gap)
    );
    box-shadow: calc(-1 * var(--pseudo-circle-radius))
      var(--pseudo-circle-radius) var(--card-background-color);
  }

  &::after {
    left: calc(
      50% + 2 * var(--pseudo-circle-radius) +
        (var(--card-grid-gap) - 2 * var(--pseudo-circle-radius)) / 2
    );
    bottom: 0;
    transform: translateX(-50%);
    box-shadow: calc(-1 * var(--pseudo-circle-radius))
      var(--pseudo-circle-radius) var(--card-background-color);
  }
`;

export default getInsightCardMediaCss;
