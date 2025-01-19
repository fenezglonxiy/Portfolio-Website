/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getMainInsightCardTextCss from "./getMainInsightCardTextCss";

export type MainInsightCardTextProps = React.ComponentPropsWithoutRef<"div">;

function MainInsightCardText(props: MainInsightCardTextProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getMainInsightCardTextCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default MainInsightCardText;
