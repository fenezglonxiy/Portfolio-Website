/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Media, MediaProps } from "@/_components/media";

import getInsightDetailsHeroMediaCss from "./getInsightDetailsHeroMediaCss";

export type InsightDetailsHeroMediaProps = MediaProps;

function InsightDetailsHeroMedia(props: InsightDetailsHeroMediaProps) {
  const theme = useTheme();
  const css = getInsightDetailsHeroMediaCss(theme);

  return (
    <div css={css}>
      <Media role="representation" borderRadius="md" {...props} />
    </div>
  );
}

export default InsightDetailsHeroMedia;
