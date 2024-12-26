/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getBaseInsightCardMediaCss from "./getBaseInsightCardMediaCss";

export type BaseInsightCardMediaProps = CardMediaProps;

function BaseInsightCardMedia(props: BaseInsightCardMediaProps) {
  const css = getBaseInsightCardMediaCss();

  return <CardMedia css={css} {...props} />;
}

export default BaseInsightCardMedia;
