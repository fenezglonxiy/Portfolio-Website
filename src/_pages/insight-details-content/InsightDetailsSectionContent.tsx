/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import getInsightDetailsSectionContentCss from "./getInsightDetailsSectionContentCss";

export type InsightDetailsSectionContentProps =
  React.ComponentPropsWithoutRef<"div">;

function InsightDetailsSectionContent(
  props: InsightDetailsSectionContentProps
) {
  const theme = useTheme();
  const css = getInsightDetailsSectionContentCss(theme);

  return <div css={css} {...props} />;
}

export default InsightDetailsSectionContent;
