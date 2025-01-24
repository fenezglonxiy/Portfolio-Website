/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getInsightDetailsSectionCss from "./getInsightDetailsSectionCss";

export type InsightDetailsSectionProps =
  React.ComponentPropsWithoutRef<"section">;

function InsightDetailsSection(props: InsightDetailsSectionProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getInsightDetailsSectionCss(theme);

  return (
    <section className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default InsightDetailsSection;
