/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getWorkShowcaseCardMediaCss from "./getWorkShowcaseCardMediaCss";

export type WorkShowcaseCardMediaProps = CardMediaProps;

function WorkShowcaseCardMedia(props: WorkShowcaseCardMediaProps) {
  const css = getWorkShowcaseCardMediaCss();

  return <CardMedia css={css} {...props} />;
}

export default WorkShowcaseCardMedia;
