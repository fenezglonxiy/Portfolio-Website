/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightDetailsHeroTextCss from "./getInsightDetailsHeroTextCss";

export type InsightDetailsHeroTextProps = React.ComponentPropsWithoutRef<"div">;

function InsightDetailsHeroText(props: InsightDetailsHeroTextProps) {
  const theme = useTheme();
  const css = getInsightDetailsHeroTextCss(theme);

  return <div css={css} {...props} />;
}

export default InsightDetailsHeroText;
