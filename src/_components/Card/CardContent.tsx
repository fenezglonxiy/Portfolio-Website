/** @jsxImportSource @emotion/react */

"use client";

import { CardContent as MUICardContent, useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import getCardContentCss from "./getCardContentCss";
import { useCardContext } from "./CardContext";

type CardContentBaseProps = {};
export interface CardContentTypeMap<D extends React.ElementType = "div"> {
  props: CardContentBaseProps;
  defaultComponent: D;
}

export type CardContentProps<
  D extends React.ElementType = CardContentTypeMap["defaultComponent"]
> = OverrideProps<CardContentTypeMap<D>, D> & { component?: React.ElementType };

const CardContent = React.forwardRef(function CardContent(
  props: CardContentProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { inverted } = useCardContext();
  const theme = useTheme();
  const css = getCardContentCss(theme, props, inverted);

  return <MUICardContent ref={ref} css={css} {...props} />;
});

CardContent.displayName = "CardContent";

export default CardContent;
