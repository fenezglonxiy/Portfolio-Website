/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHeaderNavListCss from "./getHeaderNavListCss";

type Props = React.ComponentPropsWithoutRef<"ul">;

function HeaderNavList(props: Props) {
  const theme = useTheme();
  const css = getHeaderNavListCss(theme);

  return <ul css={css} {...props} />;
}

export default HeaderNavList;
