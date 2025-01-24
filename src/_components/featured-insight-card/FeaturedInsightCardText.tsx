/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getFeaturedInsightCardTextCss from "./getFeaturedInsightCardTextCss";

export type FeaturedInsightCardTextProps =
  React.ComponentPropsWithoutRef<"div">;

function FeaturedInsightCardText(props: FeaturedInsightCardTextProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getFeaturedInsightCardTextCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default FeaturedInsightCardText;
