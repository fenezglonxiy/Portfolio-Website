/** @jsxImportSource @emotion/react */

"use client";

import {
  CardMedia as MUICardMedia,
  CardMediaProps as MUICardMediaProps,
  useTheme,
} from "@mui/material";
import React from "react";

import getCardMediaCss from "./getCardMediaCss";
import { useCardContext } from "./CardContext";

export type CardMediaProps = MUICardMediaProps;

const CardMedia = React.forwardRef(function CardMedia(
  props: CardMediaProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { className, ...rest } = props;
  const { inverted } = useCardContext();
  const theme = useTheme();
  const css = getCardMediaCss(theme, props, inverted);

  return (
    <div className={className} css={css.root}>
      <MUICardMedia ref={ref} component="img" css={css.media} {...rest} />
    </div>
  );
});

export default CardMedia;
