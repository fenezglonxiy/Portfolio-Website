/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";
import { useTheme } from "@mui/material";

import { InsightCardVariant } from "./types";
import getInsightCardMediaCss from "./getInsightCardMediaCss";

export type InsightCardMediaProps = CardMediaProps & {
  /**
   * The variant to use. It should match the insight card variant.
   * @default "base"
   */
  variant?: InsightCardVariant;
};

function InsightCardMedia(props: InsightCardMediaProps) {
  const { variant = "base", ...rest } = props;
  const theme = useTheme();
  const css = getInsightCardMediaCss(theme, variant);

  return <CardMedia css={css} {...rest} />;
}

export default InsightCardMedia;
