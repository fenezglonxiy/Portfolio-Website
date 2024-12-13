/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { Divider as MUIDivider, useTheme } from "@mui/material";
import getDividerCss from "./getDividerCss";

type DividerBaseProps = {
  /**
   * Control the orientation.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Control the color.
   * @default "inherit"
   */
  color?:
    | "neutral-100"
    | "neutral-200"
    | "neutral-250"
    | "neutral-300"
    | "neutral-350"
    | "neutral-400"
    | "neutral-450"
    | "neutral-500"
    | "neutral-550"
    | "neutral-600"
    | "neutral-650"
    | "neutral-700"
    | "neutral-750"
    | "neutral-800"
    | "neutral-850"
    | "neutral-900"
    | "inherit";

  /**
   * Control the text alignment.
   * @default "center"
   */
  textAlign?: "left" | "center" | "right";

  /**
   * If `true`, a vertical divider will have the correct height when used in
   * flex container. (By default, a vertical divider will have a calculated
   * height of `0px` if it is the child of a flex container.)
   */
  flexItem?: boolean;
};

export interface DividerTypeMap<D extends React.ElementType = "hr"> {
  props: DividerBaseProps;
  defaultComponent: D;
}

export type DividerProps<
  D extends React.ElementType = DividerTypeMap["defaultComponent"]
> = OverrideProps<DividerTypeMap<D>, D>;

const Divider = React.forwardRef(function Divider(
  props: DividerProps,
  ref: React.Ref<HTMLHRElement>
) {
  const {
    orientation = "horizontal",
    color = "inherit",
    textAlign = "center",
    ...rest
  } = props;
  const theme = useTheme();
  const css = getDividerCss(theme, { ...props, color });

  return (
    <MUIDivider
      ref={ref}
      css={css}
      orientation={orientation}
      textAlign={textAlign}
      {...rest}
    />
  );
});

Divider.displayName = "Divider";

export default Divider;
