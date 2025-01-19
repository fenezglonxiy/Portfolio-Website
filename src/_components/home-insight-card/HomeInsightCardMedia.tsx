/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getHomeInsightCardMediaCss from "./getHomeInsightCardMediaCss";

export type HomeInsightCardMediaProps = CardMediaProps;

function HomeInsightCardMedia(props: HomeInsightCardMediaProps) {
  const css = getHomeInsightCardMediaCss();

  return <CardMedia css={css} {...props} />;
}

export default HomeInsightCardMedia;
