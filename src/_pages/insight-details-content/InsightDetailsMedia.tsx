/** @jsxImportSource @emotion/react */

"use client";

import { Media, MediaProps } from "@/_components/media";

import getInsightDetailsMediaCss from "./getInsightDetailsMediaCss";

export type InsightDetailsMediaProps = MediaProps;

function InsightDetailsMedia(props: InsightDetailsMediaProps) {
  const css = getInsightDetailsMediaCss();

  return <Media borderRadius="lg" css={css} fullWidth {...props} />;
}

export default InsightDetailsMedia;
