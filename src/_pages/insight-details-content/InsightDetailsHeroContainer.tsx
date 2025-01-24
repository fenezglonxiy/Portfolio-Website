/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightDetailsHeroContainerCss from "./getInsightDetailsHeroContainerCss";

export type InsightDetailsHeroContainerProps =
  React.ComponentPropsWithoutRef<"div">;

function InsightDetailsHeroContainer(props: InsightDetailsHeroContainerProps) {
  const theme = useTheme();
  const css = getInsightDetailsHeroContainerCss(theme);

  return <div css={css} {...props} />;
}

export default InsightDetailsHeroContainer;
