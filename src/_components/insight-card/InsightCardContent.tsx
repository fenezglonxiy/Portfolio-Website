/** @jsxImportSource @emotion/react */

"use client";

import { CardContent, CardContentProps } from "@/_components/Card";

import { InsightCardVariant } from "./types";
import { useTheme } from "@mui/material";
import getInsightCardContentCss from "./getInsightCardContentCss";

export type InsightCardContentProps = CardContentProps & {
  /**
   * The variant to use. It should match the insight card variant.
   * @default "base"
   */
  variant?: InsightCardVariant;
};

function InsightCardContent(props: InsightCardContentProps) {
  const { variant = "base", ...rest } = props;
  const theme = useTheme();
  const css = getInsightCardContentCss(theme, variant);

  return <CardContent css={css} {...rest} />;
}

export default InsightCardContent;
