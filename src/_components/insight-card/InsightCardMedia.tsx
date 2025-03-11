/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getInsightCardMediaCss from "./getInsightCardMediaCss";

type Props = CardMediaProps;

function InsightCardMedia(props: Props) {
  const theme = useTheme();
  const css = getInsightCardMediaCss(theme);

  return <CardMedia css={css} {...props} />;
}

export default InsightCardMedia;
