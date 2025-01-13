/** @jsxImportSource @emotion/react */

"use client";

import React from "react";

import { Typography } from "@/_components/Typography";
import getInsightSummaryCss from "./getInsightSummaryCss";
import { InsightCardVariant } from "./types";
import { useTheme } from "@mui/material";

export type InsightSummaryProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
> & {
  /**
   * The variant to use. It should match the insight card variant.
   * @default "base"
   */
  variant?: InsightCardVariant;
};

function InsightSummary(props: InsightSummaryProps) {
  const { variant = "base", ...rest } = props;
  const theme = useTheme();
  const css = getInsightSummaryCss(theme, { ...props, variant });

  return <Typography variant="body1" color="neutral-700" css={css} {...rest} />;
}

export default InsightSummary;
