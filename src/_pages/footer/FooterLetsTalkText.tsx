/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getFooterLetsTalkTextCss from "./getFooterLetsTalkTextCss";

export type FooterLetsTalkTextProps = React.ComponentPropsWithoutRef<"div">;

function FooterLetsTalkText(props: FooterLetsTalkTextProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getFooterLetsTalkTextCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default FooterLetsTalkText;
