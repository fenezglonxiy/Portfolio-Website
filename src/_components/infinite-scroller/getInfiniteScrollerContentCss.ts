import { css } from "@mui/material";

import { InfiniteScrollerContentProps } from "./InfiniteScrollerContent";

const getPausedInfiniteScrollerContentCss = () => css`
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
`;

const getInfiniteScrollerContentCss = (
  animated: boolean,
  props: InfiniteScrollerContentProps
) => css`
  display: flex;
  flex-wrap: wrap;
  --animation-duration: ${props.scrollingSpeed as number}s;
  --animation-direction: ${props.scrollingDirection === "left"
    ? "forwards"
    : "backwards"};

  ${(animated as boolean) &&
  css`
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--animation-duration) var(--animation-direction)
      linear infinite;
  `};

  ${props.pauseWhenItemIsHovered &&
  css`
    &:has(*:hover) {
      ${getPausedInfiniteScrollerContentCss()}
    }
  `};

  ${props.pauseWhenItemIsActive &&
  css`
    &:has(*:active) {
      ${getPausedInfiniteScrollerContentCss()}
    }
  `};

  ${props.pauseWhenItemIsFocus &&
  css`
    &:has(*:focus) {
      ${getPausedInfiniteScrollerContentCss()}
    }
  `};

  @keyframes scroll {
    to {
      transform: translateX(-50%);
    }
  }
`;

export default getInfiniteScrollerContentCss;
