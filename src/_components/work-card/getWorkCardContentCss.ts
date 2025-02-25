import { css, Theme } from "@mui/material";

const getWorkCardContentCss = (theme: Theme) => css`
  position: relative;
  padding: ${theme.spacing(5)};
  will-change: transform;
  transition: transform ease 0.3s;
  background-color: ${theme.palette.common.white};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: calc(2 * var(--card-media-border-radius));
    height: calc(2 * var(--card-media-border-radius));
    border-radius: 100%;
    background-color: transparent;
  }

  &::before {
    top: calc(-2 * var(--card-media-border-radius));
    left: ${theme.spacing(5)};
    box-shadow: calc(-1 * var(--card-media-border-radius))
      var(--card-media-border-radius) ${theme.palette.common.white};
  }

  &::after {
    top: calc(-2 * var(--card-media-border-radius));
    right: ${theme.spacing(5)};
    box-shadow: var(--card-media-border-radius) var(--card-media-border-radius)
      ${theme.palette.common.white};
  }
`;

export default getWorkCardContentCss;
