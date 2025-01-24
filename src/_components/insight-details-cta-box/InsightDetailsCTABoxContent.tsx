/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightDetailsCTABoxContentCss from "./getInsightDetailsCTABoxContentCss";

export type InsightDetailsCTABoxContentProps =
  React.ComponentPropsWithoutRef<"div">;

function InsightDetailsCTABoxContent(props: InsightDetailsCTABoxContentProps) {
  const theme = useTheme();
  const css = getInsightDetailsCTABoxContentCss(theme);

  return <div css={css} {...props} />;
}

export default InsightDetailsCTABoxContent;
