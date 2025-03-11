/** @jsxImportSource @emotion/react */

"use client";

import React from "react";

import { Card as MUICard, ThemeOptions, useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";

import getCardCss from "./getCardCss";

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    fill: true;
  }
}

type CardBaseProps = {
  /**
   * Control the card border-radius.
   * @default "md"
   */
  borderRadius?: keyof Omit<
    NonNullable<ThemeOptions["shape"]>,
    "pill" | "circle"
  >;

  /**
   * Control the card variant.
   * @default "elevation"
   */
  variant?: "elevation" | "outlined" | "fill";
};

export interface CardTypeMap<D extends React.ElementType = "div"> {
  props: CardBaseProps;
  defaultComponent: D;
}

export type CardProps<
  D extends React.ElementType = CardTypeMap["defaultComponent"]
> = OverrideProps<CardTypeMap<D>, D>;

const Card = React.forwardRef(function Card(
  props: CardProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { borderRadius = "md", variant = "elevation", ...rest } = props;
  const theme = useTheme();
  const css = getCardCss(theme, { ...rest, borderRadius, variant });

  return <MUICard ref={ref} variant={variant} css={css} {...rest} />;
});

Card.displayName = "Card";

export default Card;
