/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { IconButton as MUIIconButton, useTheme } from "@mui/material";

import getIconButtonCss from "./getIconButtonCss";

type IconButtonBaseProps = {
  /**
   * The color of the component.
   *
   * @default "default"
   */
  color?: "inherit" | "default";

  /**
   * The size of the component.
   *
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;

  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon
   * with content above or below, without ruining the border size and shape).
   *
   * @default false
   */
  edge?: "start" | "end" | false;
};

export interface IconButtonTypeMap<D extends React.ElementType = "button"> {
  props: IconButtonBaseProps;
  defaultComponent: D;
}

export type IconButtonProps<
  D extends React.ElementType = IconButtonTypeMap["defaultComponent"]
> = OverrideProps<IconButtonTypeMap<D>, D>;

const IconButton = React.forwardRef(function IconButton(
  props: IconButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const { color = "default", size = "medium", edge = false, ...rest } = props;
  const theme = useTheme();
  const css = getIconButtonCss(theme, { ...rest, color, size });

  return (
    <MUIIconButton
      ref={ref}
      color={color}
      size={size}
      edge={edge}
      css={css}
      disableRipple
      {...rest}
    />
  );
});

IconButton.displayName = "IconButton";

export default IconButton;
