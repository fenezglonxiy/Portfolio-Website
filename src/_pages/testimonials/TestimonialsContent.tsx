/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getTestimonialsContentCss from "./getTestimonialsContentCss";

export type TestimonialsContentProps = React.ComponentPropsWithoutRef<"div">;

function TestimonialsContent(props: TestimonialsContentProps) {
  const theme = useTheme();
  const css = getTestimonialsContentCss(theme);

  return <div css={css} {...props} />;
}

export default TestimonialsContent;
