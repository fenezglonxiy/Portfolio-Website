/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import { Box } from "@/_components/box";

import { useCardContext } from "./CardContext";
import { useTheme } from "@mui/material";
import getCardHighlightCss from "./getCardHighlightCss";

type CardHighlightBaseProps = {
  children?: string;
};

export interface CardHighlightTypeMap<D extends React.ElementType = "div"> {
  props: CardHighlightBaseProps;
  defaultComponent: D;
}

export type CardHighlightProps<
  D extends React.ElementType = CardHighlightTypeMap["defaultComponent"]
> = OverrideProps<CardHighlightTypeMap<D>, D> & {
  component?: React.ElementType;
};

const CardHighlight = React.forwardRef(function CardHighlight(
  props: CardHighlightProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { children, ...rest } = props;
  const { inverted } = useCardContext();

  if (!inverted) {
    throw new Error("<CardHighlight> should be used when <Card> is inverted.");
  }

  const theme = useTheme();
  const css = getCardHighlightCss(theme);

  return (
    <Box ref={ref} css={css} {...rest}>
      <div></div>
      <span>{children}</span>
    </Box>
  );
});

CardHighlight.displayName = "CardHighlight";

export default CardHighlight;
