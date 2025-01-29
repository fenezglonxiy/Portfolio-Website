/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getFooterLetsTalkCss from "./getFooterLetsTalkCss";

export type FooterLetsTalkProps = React.ComponentPropsWithoutRef<"div">;

function FooterLetsTalk(props: FooterLetsTalkProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getFooterLetsTalkCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default FooterLetsTalk;
