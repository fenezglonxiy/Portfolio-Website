/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightDetailsHeroContentCss from "./getInsightDetailsHeroContentCss";

export type InsightDetailsHeroContentProps =
  React.ComponentPropsWithoutRef<"div">;

function InsightDetailsHeroContent(props: InsightDetailsHeroContentProps) {
  const theme = useTheme();
  const css = getInsightDetailsHeroContentCss(theme);

  return <div css={css} {...props} />;
}

export default InsightDetailsHeroContent;
