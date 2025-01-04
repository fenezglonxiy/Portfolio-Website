/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia as MUICardMedia, useTheme } from "@mui/material";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";
import React from "react";

import getCardMediaCss from "./getCardMediaCss";
import { useCardContext } from "./CardContext";

type CardMediaBaseProps = {
  /**
   * Control the media source.
   */
  src: string;

  /**
   * Control the alternative text for the media.
   */
  alt?: string;

  /**
   * Control the element used for the root node.
   *
   * It should match with the media type for the component work properly.
   */
  component: "video" | "audio" | "picture" | "iframe" | "img";
};

export interface CardMediaTypeMap<D extends React.ElementType = "div"> {
  props: CardMediaBaseProps;
  defaultComponent: D;
}

export type CardMediaProps<
  D extends React.ElementType = CardMediaTypeMap["defaultComponent"]
> = OverrideProps<CardMediaTypeMap<D>, D> & {
  component?: React.ElementType;
};

const CardMedia: OverridableComponent<CardMediaTypeMap> = React.forwardRef(
  function CardMedia(props: CardMediaProps, ref: React.Ref<HTMLDivElement>) {
    const {
      className,

      ...rest
    } = props;
    const { inverted } = useCardContext();
    const theme = useTheme();
    const css = getCardMediaCss(theme, props, inverted);

    return (
      <div className={className} css={css.root}>
        <MUICardMedia ref={ref} css={css.media} {...rest} />
      </div>
    );
  }
);

export default CardMedia;
