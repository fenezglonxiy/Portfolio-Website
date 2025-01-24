/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getInsightCardMediaCss from "./getInsightCardMediaCss";

export type InsightCardMediaProps = CardMediaProps;

function InsightCardMedia(props: InsightCardMediaProps) {
  const css = getInsightCardMediaCss();

  return <CardMedia css={css} {...props} />;
}

export default InsightCardMedia;
