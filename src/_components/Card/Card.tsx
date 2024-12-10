/** @jsxImportSource @emotion/react */

"use client";

import { Card as MUICard, useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import getCardCss from "./getCardCss";
import { ThemeOptions } from "@mui/material/styles";

type CardBaseProps = {
  /**
   * Control the shape.
   * @default "md"
   */
  shape?: keyof NonNullable<ThemeOptions["shape"]>;
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
  const { shape = "md", ...rest } = props;
  const theme = useTheme();
  const css = getCardCss(theme, { ...props, shape });

  return <MUICard ref={ref} css={css} {...rest} />;
});

Card.displayName = "Card";

export default Card;
