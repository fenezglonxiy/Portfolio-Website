/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { Popper as MUIPopper, useTheme } from "@mui/material";

import PopperArrow from "./PopperArrow";
import getPopperCss from "./getPopperCss";

type PopperBaseProps = {
  /**
   * If `true`, the popper is shown.
   */
  open: boolean;

  /**
   * The current anchor element, or a function returns the current anchor
   * element.
   */
  anchorEl?: Element | (() => Element) | null;

  /**
   * If `true`, the `children` will be under the DOM hierarchy of the parent
   * component.
   */
  disablePortal?: boolean;

  /**
   * The Popper's placement.
   *
   * @default "bottom"
   */
  placement?:
    | "auto-end"
    | "auto-start"
    | "auto"
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";

  /**
   * Control whether the popper should have an arrow.
   */
  arrow?: boolean;
};

export interface PopperTypeMap<D extends React.ElementType = "div"> {
  props: PopperBaseProps;
  defaultComponent: D;
}

export type PopperProps<
  D extends React.ElementType = PopperTypeMap["defaultComponent"]
> = OverrideProps<PopperTypeMap<D>, D>;

const Popper = React.forwardRef(function Popper(
  props: PopperProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { placement = "bottom", arrow, children, ...rest } = props;
  const theme = useTheme();
  const css = getPopperCss(theme);
  const [arrowRef, setArrowRef] = React.useState<Element | null>(null);

  const arrowModifier = arrow
    ? {
        name: "arrow",
        enabled: true,
        options: {
          element: arrowRef,
        },
      }
    : undefined;

  const modifiers = [{ ...arrowModifier }];

  return (
    <MUIPopper
      ref={ref}
      placement={placement}
      modifiers={modifiers}
      css={css}
      {...rest}
    >
      {arrow && <PopperArrow ref={setArrowRef} placement={placement} />}
      {children}
    </MUIPopper>
  );
});

Popper.displayName = "Popper";

export default Popper;
