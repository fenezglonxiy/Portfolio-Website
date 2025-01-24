/** @jsxImportSource @emotion/react */

"use client";

import React from "react";

import { Typography } from "@/_components/Typography";

import getInsightTitleCss from "./getInsightTitleCss";

export type InsightTitleProps = Omit<
  React.HTMLAttributes<HTMLHeadingElement>,
  "color"
>;

function InsightTitle(props: InsightTitleProps) {
  const css = getInsightTitleCss();

  return (
    <Typography
      component="h4"
      variant="subtitle2"
      fontWeight="bold"
      css={css}
      {...props}
    />
  );
}

export default InsightTitle;
