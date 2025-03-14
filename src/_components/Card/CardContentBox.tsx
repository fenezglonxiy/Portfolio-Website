/** @jsxImportSource @emotion/react */

"use client";

import React from "react";

import { useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import { Box } from "@/_components/box";
import clsx from "clsx";

import getCardContentBoxCss from "./getCardContentBoxCss";

type CardContentBoxBaseProps = {
  /**
   * Control the box `flex` orientation.
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Control the `justify-content` CSS attribute value.
   */
  justifyContent?: React.CSSProperties["justifyContent"];

  /**
   * Control the `alignItems` CSS attribute value.
   */
  alignItems?: React.CSSProperties["alignItems"];

  /**
   * Control the `flex-wrap` CSS attribute value.
   */
  flexWrap?: React.CSSProperties["flexWrap"];

  /**
   * Control the `gap` CSS attribute value.
   *
   * The actual spacing is calculated by using `theme.spacing()` function.
   */
  flexGap?: number;

  /**
   * Control the `flex` CSS attribute value.
   */
  flex?: React.CSSProperties["flex"];

  /**
   * Control the `justifySelf` CSS attribute value.
   */
  justifySelf?: React.CSSProperties["justifySelf"];

  /**
   * Control the `alignSelf` CSS attribute value.
   */
  alignSelf?: React.CSSProperties["alignSelf"];

  /**
   * Control the vertical spacing between items within the content.
   *
   * The actual spacing is calculated by using `theme.spacing()` function.
   */
  verticalSpacing?: number;

  /**
   * Control the horizontal spacing between items within the content.
   *
   * The actual spacing is calculated by using `theme.spacing()` function.
   */
  horizontalSpacing?: number;
};

export interface CardContentBoxTypeMap<D extends React.ElementType = "div"> {
  props: CardContentBoxBaseProps;
  defaultComponent: D;
}

export type CardContentBoxProps<
  D extends React.ElementType = CardContentBoxTypeMap["defaultComponent"]
> = OverrideProps<CardContentBoxTypeMap<D>, D> & {
  component?: React.ElementType;
};

const CardContentBox = React.forwardRef(function CardContentBox(
  props: CardContentBoxProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    orientation,
    justifyContent,
    alignItems,
    flexWrap,
    flexGap,
    flex,
    verticalSpacing,
    horizontalSpacing,
    className,
    ...rest
  } = props;
  const theme = useTheme();
  const css = getCardContentBoxCss(theme, {
    ...rest,
    orientation,
    justifyContent,
    alignItems,
    flexWrap,
    flexGap,
    flex,
    verticalSpacing,
    horizontalSpacing,
  });

  return (
    <Box
      ref={ref}
      css={css}
      className={clsx(
        horizontalSpacing && "flow-spacer-x",
        verticalSpacing && "flow-spacer-y",
        className
      )}
      {...rest}
    />
  );
});

CardContentBox.displayName = "CardContentBox";

export default CardContentBox;
