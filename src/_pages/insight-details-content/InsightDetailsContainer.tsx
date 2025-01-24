/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightDetailsContainerCss from "./getInsightDetailsContainerCss";

export type InsightDetailsContainerProps =
  React.ComponentPropsWithoutRef<"div">;

function InsightDetailsContainer(props: InsightDetailsContainerProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getInsightDetailsContainerCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div css={css.inner}>{children}</div>
    </div>
  );
}

export default InsightDetailsContainer;
