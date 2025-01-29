/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getFooterNavListCss from "./getFooterNavListCss";

export type FooterNavListProps = React.ComponentPropsWithoutRef<"ul">;

function FooterNavList(props: FooterNavListProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getFooterNavListCss(theme);

  return (
    <ul className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default FooterNavList;
