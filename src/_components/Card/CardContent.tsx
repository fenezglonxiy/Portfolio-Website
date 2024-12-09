/** @jsxImportSource @emotion/react */

import { CardContent as MUICardContent } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

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
  return <MUICardContent ref={ref} {...props} />;
});

CardContent.displayName = "CardContent";

export default CardContent;
