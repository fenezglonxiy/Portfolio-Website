/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";

import { Typography } from "@/_components/Typography";

import getInsightTitleCss from "./getInsightTitleCss";

export type InsightTitleProps = Omit<
  React.HTMLAttributes<HTMLHeadingElement>,
  "color"
>;

function InsightTitle(props: InsightTitleProps) {
  const theme = useTheme();
  const css = getInsightTitleCss(theme);

  return <Typography component="h4" css={css} {...props} />;
}

export default InsightTitle;
