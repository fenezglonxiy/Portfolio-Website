/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getSubInsightCardMediaCss from "./getSubInsightCardMediaCss";

export type SubInsightCardMediaProps = CardMediaProps;

function SubInsightCardMedia(props: SubInsightCardMediaProps) {
  const css = getSubInsightCardMediaCss();

  return <CardMedia css={css} {...props} />;
}

export default SubInsightCardMedia;
