/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightPublishInfo from "./getInsightPublishInfo";

export type InsightPublishInfoProps = React.ComponentPropsWithoutRef<"div">;

function InsightPublishInfo(props: InsightPublishInfoProps) {
  const theme = useTheme();
  const css = getInsightPublishInfo(theme);

  return <div css={css} {...props} />;
}

export default InsightPublishInfo;
