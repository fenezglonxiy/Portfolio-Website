/** @jsxImportSource @emotion/react */

"use client";

import {
  Typography as MUITypography,
  TypographyVariants as MUITypographyVariants,
  useTheme,
} from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import { FontStyle as MUIFontStyle } from "@mui/material/styles/createTypography";
import React from "react";

import getTypographyCss from "./getTypographyCss";

type FontStyle = keyof MUIFontStyle;

export type TypographyVariants = keyof Omit<
  MUITypographyVariants,
  "pxToRem" | FontStyle
>;

const typographyElementByVariant: Record<
  TypographyVariants,
  React.ElementType
> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body1Medium: "p",
  body2: "p",
  body2Medium: "p",
  caption: "p",
  inherit: "p",
  overline: "p",
  button: "p",
};

type TypographyBaseProps = {
  /**
   * Set the text-align on the component.
   * @default "inherit"
   */
  align?: "inherit" | "left" | "center" | "right" | "justify";

  /**
   * Control the display type.
   * @default undefined
   */
  display?: "initial" | "block" | "inline" | "inline-block";

  /**
   * Apply the theme typography styles.
   * @default "body1"
   */
  variant?: TypographyVariants;

  /**
   * The color for the text.
   * It supports the relevant theme colors for this component.
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
    | "slate-50"
    | "slate-100"
    | "slate-200"
    | "slate-300"
    | "slate-400"
    | "slate-500"
    | "slate-600"
    | "slate-700"
    | "slate-800"
    | "slate-900"
    | "indigo-50"
    | "indigo-100"
    | "indigo-200"
    | "indigo-300"
    | "indigo-400"
    | "indigo-500"
    | "indigo-600"
    | "indigo-700"
    | "indigo-800"
    | "indigo-900"
    | "white"
    | "error"
    | "inherit";

  /**
   * Control the font-weight type.
   */
  fontWeight?:
    | "thin"
    | "extra-light"
    | "light"
    | "regular"
    | "medium"
    | "semi-bold"
    | "bold"
    | "extra-bold"
    | "black";

  /**
   * Control the transformation of text.
   * @default "none"
   */
  transform?: "uppercase" | "lowercase" | "capitalize" | "inherit" | "none";
};

export interface TypographyTypeMap<D extends React.ElementType = "p"> {
  props: TypographyBaseProps;
  defaultComponent: D;
}

export type TypographyProps<
  D extends React.ElementType = TypographyTypeMap["defaultComponent"]
> = OverrideProps<TypographyTypeMap<D>, D> & { component?: React.ElementType };

const Typography = React.forwardRef(function Typography(
  props: TypographyProps,
  ref: React.Ref<HTMLSpanElement>
) {
  const {
    align = "inherit",
    display,
    variant = "body1",
    color = "inherit",
    transform = "none",
    fontWeight,
    component,
    ...rest
  } = props;
  const theme = useTheme();
  const css = getTypographyCss(theme, {
    ...rest,
    align,
    display,
    variant,
    color,
    transform,
    fontWeight,
  });

  return (
    <MUITypography
      ref={ref}
      component={
        component ||
        typographyElementByVariant[variant as NonNullable<TypographyVariants>]
      }
      css={css}
      {...rest}
    />
  );
});

Typography.displayName = "Typography";

export default Typography;
