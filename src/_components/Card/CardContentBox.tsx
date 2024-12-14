/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { Box } from "../box";
import { useTheme } from "@mui/material";
import getCardContentBoxCss from "./getCardContentBoxCss";
import clsx from "clsx";

type CardContentBoxBaseProps = {
  /**
   * Control the box `flex` orientation.
   */
  flex?: "horizontal" | "vertical";

  /**
   * Control the `flex-wrap` CSS attribute value.
   */
  flexWrap?: "wrap" | "nowrap";

  /**
   * Control the `gap` CSS attribute value.
   *
   * The actual spacing is calculated by using `theme.spacing()` function.
   */
  flexGap?: number;

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
    flex,
    flexWrap,
    flexGap,
    verticalSpacing,
    horizontalSpacing,
    className,
    ...rest
  } = props;
  const theme = useTheme();
  const css = getCardContentBoxCss(theme, {
    ...props,
    flex,
    flexWrap,
    flexGap,
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
