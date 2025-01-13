/** @jsxImportSource @emotion/react */

"use client";

import {
  Chip as MUIChip,
  ChipProps as MUIChipProps,
  useTheme,
} from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import getChipCss from "./getChipCss";

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    white: true;
    indigo: true;
  }
}

type ChipBaseProps = {
  /**
   * The variant to use.
   * @default "filled"
   */
  variant?: MUIChipProps["variant"];

  /**
   * The color of the component.
   * @default "default"
   */
  color?: MUIChipProps["color"];

  /**
   * The size of the component.
   * @default "medium"
   */
  size?: MUIChipProps["size"];

  /**
   * The content of the component.
   */
  label?: string;

  /**
   * If `true`, the component will appear clickable.
   */
  clickable?: boolean;

  children?: undefined | null;
};

export interface ChipTypeMap<D extends React.ElementType = "div"> {
  props: ChipBaseProps;
  defaultComponent: D;
}

export type ChipProps<
  D extends React.ElementType = ChipTypeMap["defaultComponent"]
> = OverrideProps<ChipTypeMap<D>, D> & { component?: React.ElementType };

const Chip = React.forwardRef(function Chip(
  props: ChipProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    variant = "filled",
    color = "default",
    size = "medium",
    ...rest
  } = props;
  const theme = useTheme();
  const css = getChipCss(theme, { ...props, variant, color, size });

  return (
    <MUIChip
      ref={ref}
      css={css}
      variant={variant}
      size={size}
      color={color}
      {...rest}
    />
  );
});

Chip.displayName = "Chip";

export default Chip;
