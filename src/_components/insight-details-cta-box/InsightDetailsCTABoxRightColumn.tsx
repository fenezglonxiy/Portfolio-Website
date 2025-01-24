/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import getInsightDetailsCTABoxRightColumnCss from "./getInsightDetailsCTABoxRightColumnCss";

export type InsightDetailsCTABoxRightColumnProps =
  React.ComponentPropsWithoutRef<"div">;

function InsightDetailsCTABoxRightColumn(
  props: InsightDetailsCTABoxRightColumnProps
) {
  const theme = useTheme();
  const css = getInsightDetailsCTABoxRightColumnCss(theme);

  return <div css={css} {...props} />;
}

export default InsightDetailsCTABoxRightColumn;
