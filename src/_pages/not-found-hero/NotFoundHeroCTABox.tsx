/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getNotFoundHeroCTABoxCss from "./getNotFoundHeroCTABoxCss";

export type NotFoundHeroCTABoxProps = React.ComponentPropsWithoutRef<"div">;

function NotFoundHeroCTABox(props: NotFoundHeroCTABoxProps) {
  const theme = useTheme();
  const css = getNotFoundHeroCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default NotFoundHeroCTABox;
