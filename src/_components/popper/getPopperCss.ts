import { css, Theme } from "@mui/material";

const getPopperArrowPlacementCss = () => css`
  &[data-popper-placement="top"],
  &[data-popper-placement="top-start"],
  &[data-popper-placement="top-end"] {
    & .popper-arrow {
      bottom: -14px;

      &::after {
        transform: rotate(45deg) translate(-6px, -6px);
      }
    }
  }

  &[data-popper-placement="right"],
  &[data-popper-placement="right-start"],
  &[data-popper-placement="right-end"] {
    & .popper-arrow {
      left: -14px;

      &::after {
        transform: rotate(45deg) translate(6px, -6px);
      }
    }
  }

  &[data-popper-placement="bottom"],
  &[data-popper-placement="bottom-start"],
  &[data-popper-placement="bottom-end"] {
    & .popper-arrow {
      top: -14px;

      &::after {
        transform: rotate(45deg) translate(6px, 6px);
      }
    }
  }

  &[data-popper-placement="left"],
  &[data-popper-placement="left-start"],
  &[data-popper-placement="left-end"] {
    & .popper-arrow {
      right: -14px;

      &::after {
        transform: rotate(45deg) translate(-6px, 6px);
      }
    }
  }
`;

const getPopperCss = (theme: Theme) => css`
  --Popper-shadow: rgba(0, 0, 0, 0.05) 0px 0px 4px,
    rgba(0, 0, 0, 0.15) 0px 2px 8px;
  z-index: ${theme.zIndex.tooltip};
  box-shadow: var(--Popper-shadow);
  border-radius: ${theme.shape.xs};
  ${getPopperArrowPlacementCss()};
`;

export default getPopperCss;
