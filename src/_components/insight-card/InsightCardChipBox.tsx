/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { InsightCardVariant } from "./types";
import getInsightCardChipBoxCss from "./getInsightCardChipBoxCss";

export type InsightCardChipBoxProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * The variant to use. It should match the insight card variant.
   * @default "base"
   */
  variant?: InsightCardVariant;
};

function InsightCardChipBox(props: InsightCardChipBoxProps) {
  const { variant = "base", ...rest } = props;
  const theme = useTheme();
  const css = getInsightCardChipBoxCss(theme, variant);

  return <div css={css} {...rest} />;
}

export default InsightCardChipBox;
