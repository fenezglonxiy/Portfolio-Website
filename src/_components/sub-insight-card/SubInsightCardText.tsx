/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getSubInsightCardTextCss from "./getSubInsightCardTextCss";

export type SubInsightCardTextProps = React.ComponentPropsWithoutRef<"div">;

function SubInsightCardText(props: SubInsightCardTextProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getSubInsightCardTextCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default SubInsightCardText;
