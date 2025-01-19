/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getMainInsightCardMediaCss from "./getMainInsightCardMediaCss";

export type MainInsightCardMediaProps = CardMediaProps;

function MainInsightCardMedia(props: MainInsightCardMediaProps) {
  const css = getMainInsightCardMediaCss();

  return <CardMedia css={css} {...props} />;
}

export default MainInsightCardMedia;
