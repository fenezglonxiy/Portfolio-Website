/** @jsxImportSource @emotion/react */

"use client";

import {
  CardMedia as MUICardMedia,
  CardMediaProps as MUICardMediaProps,
  ThemeOptions,
  useTheme,
} from "@mui/material";
import React from "react";

import getCardMediaCss from "./getCardMediaCss";

export type CardMediaProps = MUICardMediaProps & {
  /**
   * Control the border-radius of the media.
   *
   * @default "none"
   */
  borderRadius?: keyof Omit<
    NonNullable<ThemeOptions["shape"]>,
    "pill" | "circle"
  >;
};

const CardMedia = React.forwardRef(function CardMedia(
  props: CardMediaProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { className, borderRadius = "none", ...rest } = props;
  const theme = useTheme();
  const css = getCardMediaCss(theme, { ...rest, borderRadius });

  return (
    <div className={className}>
      <MUICardMedia ref={ref} css={css.media} {...rest} />
    </div>
  );
});

export default CardMedia;
