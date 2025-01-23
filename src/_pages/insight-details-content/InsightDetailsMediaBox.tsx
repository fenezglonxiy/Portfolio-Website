/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getInsightDetailsMediaBoxCss from "./getInsightDetailsMediaBoxCss";

export type InsightDetailsMediaBoxProps = React.ComponentPropsWithoutRef<"div">;

function InsightDetailsMediaBox(props: InsightDetailsMediaBoxProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getInsightDetailsMediaBoxCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default InsightDetailsMediaBox;
