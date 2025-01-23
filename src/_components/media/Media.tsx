/** @jsxImportSource @emotion/react */

"use client";

import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";
import React from "react";
import { ThemeOptions, useTheme } from "@mui/material";

import { Box } from "@/_components/box";
import getMediaCss from "./getMediaCss";

type MediaBaseProps = {
  /**
   * Control the element used for the root node.
   *
   * It should match the media type for the component to work properly.
   */
  component: "video" | "audio" | "picture" | "iframe" | "img";

  /**
   * Control the source of the media.
   */
  src: string;

  /**
   * Control the alternative text for the media.
   */
  alt?: string;

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

export interface MediaTypeMap<D extends React.ElementType = "div"> {
  props: MediaBaseProps;
  defaultComponent: D;
}

export type MediaProps<
  D extends React.ElementType = MediaTypeMap["defaultComponent"]
> = OverrideProps<MediaTypeMap<D>, D>;

const Media: OverridableComponent<MediaTypeMap> = React.forwardRef(
  function Media(props: MediaProps, ref: React.Ref<HTMLDivElement>) {
    const { borderRadius = "none", fullWidth, ...rest } = props;
    const theme = useTheme();
    const css = getMediaCss(theme, { ...rest, borderRadius, fullWidth });

    return <Box ref={ref} css={css} {...rest} />;
  }
);

export default Media;
