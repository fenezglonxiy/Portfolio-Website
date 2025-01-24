/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getNotFoundHeroLayoutContentCss from "./getNotFoundHeroLayoutContentCss";

export type NotFoundHeroLayoutContentProps =
  React.ComponentPropsWithoutRef<"div">;

function NotFoundHeroLayoutContent(props: NotFoundHeroLayoutContentProps) {
  const theme = useTheme();
  const css = getNotFoundHeroLayoutContentCss(theme);

  return <div css={css} {...props} />;
}

export default NotFoundHeroLayoutContent;
