/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Chip, ChipProps } from "@/_components/chip";

import getInsightTopicCss from "./getInsightTopicCss";

export type InsightTopicProps = ChipProps;

function InsightTopic(props: InsightTopicProps) {
  const theme = useTheme();
  const css = getInsightTopicCss(theme);

  return <Chip color="indigo" size="large" css={css} {...props} />;
}

export default InsightTopic;
