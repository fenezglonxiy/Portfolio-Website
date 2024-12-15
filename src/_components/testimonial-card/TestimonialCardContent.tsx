/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { CardContent, CardContentBox } from "../Card";
import { useTheme } from "@mui/material";
import getTestimonialCardContentCss from "./getTestimonialCardContentCss";

export type TestimonialCardContentProps = React.ComponentPropsWithoutRef<"div">;

function TestimonialCardContent(props: TestimonialCardContentProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getTestimonialCardContentCss(theme);

  return (
    <CardContent css={css} {...rest}>
      <CardContentBox verticalSpacing={14}>{children}</CardContentBox>
    </CardContent>
  );
}

export default TestimonialCardContent;
