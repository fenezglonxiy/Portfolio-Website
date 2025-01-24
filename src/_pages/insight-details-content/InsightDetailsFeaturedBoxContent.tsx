/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightDetailsFeaturedBoxContentCss from "./getInsightDetailsFeaturedBoxContentCss";

export type InsightDetailsFeaturedBoxContentProps =
  React.ComponentPropsWithoutRef<"div">;

function InsightDetailsFeaturedBoxContent(
  props: InsightDetailsFeaturedBoxContentProps
) {
  const theme = useTheme();
  const css = getInsightDetailsFeaturedBoxContentCss(theme);

  return <div css={css} {...props} />;
}

export default InsightDetailsFeaturedBoxContent;
