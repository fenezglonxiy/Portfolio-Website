/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getHomeTestimonialsContentCss from "./getHomeTestimonialsContentCss";

export type HomeTestimonialsContentProps =
  React.ComponentPropsWithoutRef<"div">;

function HomeTestimonialsContent(props: HomeTestimonialsContentProps) {
  const theme = useTheme();
  const css = getHomeTestimonialsContentCss(theme);

  return <div css={css} {...props} />;
}

export default HomeTestimonialsContent;
