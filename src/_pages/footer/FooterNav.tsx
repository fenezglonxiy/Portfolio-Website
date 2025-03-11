/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getFooterNavCss from "./getFooterNavCss";

export type FooterNavProps = React.ComponentPropsWithoutRef<"nav">;

function FooterNav(props: FooterNavProps) {
  const theme = useTheme();
  const css = getFooterNavCss(theme);

  return <nav css={css} {...props} />;
}

export default FooterNav;
