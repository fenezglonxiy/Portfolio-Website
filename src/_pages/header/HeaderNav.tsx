/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHeaderNavCss from "./getHeaderNavCss";

type Props = React.ComponentPropsWithoutRef<"nav">;

function HeaderNavbar(props: Props) {
  const theme = useTheme();
  const css = getHeaderNavCss(theme);

  return <nav css={css} {...props} />;
}

export default HeaderNavbar;
