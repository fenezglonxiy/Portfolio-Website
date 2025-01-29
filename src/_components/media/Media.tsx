/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { ThemeOptions, useTheme } from "@mui/material";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getMediaCss from "./getMediaCss";

export type MediaProps = CardMediaProps & {
  /**
   * Control the border-radius of the media.
   * @default "none"
   */
  borderRadius?: keyof Pick<
    NonNullable<ThemeOptions["shape"]>,
    "none" | "xs" | "sm" | "md" | "lg"
  >;

  /**
   * Control whether the media should take full width of its container.
   */
  fullWidth?: boolean;
};

const Media = React.forwardRef(function Media(
  props: MediaProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { borderRadius = "none", fullWidth, ...rest } = props;
  const theme = useTheme();
  const css = getMediaCss(theme, { ...rest, borderRadius, fullWidth });

  return <CardMedia ref={ref} css={css} {...rest} />;
});

Media.displayName = "Media";

export default Media;
