/** @jsxImportSource @emotion/react */

"use client";

import React from "react";

import { Typography } from "@/_components/Typography";

import getInsightSummaryCss from "./getInsightSummaryCss";

export type InsightSummaryProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

function InsightSummary(props: InsightSummaryProps) {
  const css = getInsightSummaryCss();

  return (
    <Typography variant="body1" color="neutral-700" css={css} {...props} />
  );
}

export default InsightSummary;
