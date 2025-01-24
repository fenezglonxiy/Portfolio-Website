/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getWorkShowcaseCardMediaCss from "./getWorkShowcaseCardMediaCss";

export type WorkShowcaseCardMediaProps = CardMediaProps;

function WorkShowcaseCardMedia(props: WorkShowcaseCardMediaProps) {
  const theme = useTheme();
  const css = getWorkShowcaseCardMediaCss(theme);

  return <CardMedia css={css} {...props} />;
}

export default WorkShowcaseCardMedia;
