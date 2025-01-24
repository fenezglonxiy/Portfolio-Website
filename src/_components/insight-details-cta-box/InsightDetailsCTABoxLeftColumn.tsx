/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import getInsightDetailsCTABoxLeftColumnCss from "./getInsightDetailsCTABoxLeftColumnCss";

export type InsightDetailsCTABoxLeftColumnProps =
  React.ComponentPropsWithoutRef<"div">;

function InsightDetailsCTABoxLeftColumn(
  props: InsightDetailsCTABoxLeftColumnProps
) {
  const theme = useTheme();
  const css = getInsightDetailsCTABoxLeftColumnCss(theme);

  return <div css={css} {...props} />;
}

export default InsightDetailsCTABoxLeftColumn;
