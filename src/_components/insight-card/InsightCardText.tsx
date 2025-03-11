/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getInsightCardTextCss from "./getInsightCardTextCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function InsightCardText(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getInsightCardTextCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default InsightCardText;
