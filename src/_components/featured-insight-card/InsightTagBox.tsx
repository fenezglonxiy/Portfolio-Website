/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightTagBoxCss from "./getInsightTagBoxCss";

export type InsightTagBoxProps = React.ComponentPropsWithoutRef<"div">;

function InsightTagBox(props: InsightTagBoxProps) {
  const theme = useTheme();
  const css = getInsightTagBoxCss(theme);

  return <div css={css} {...props} />;
}

export default InsightTagBox;
