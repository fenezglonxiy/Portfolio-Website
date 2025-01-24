/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getFeaturedInsightCardMediaCss from "./getFeaturedInsightCardMediaCss";

export type FeaturedInsightCardMediaProps = CardMediaProps;

function FeaturedInsightCardMedia(props: FeaturedInsightCardMediaProps) {
  const css = getFeaturedInsightCardMediaCss();

  return <CardMedia css={css} {...props} />;
}

export default FeaturedInsightCardMedia;
