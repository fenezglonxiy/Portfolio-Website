/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import getVisuallyHiddenCss from "./getVisuallyHiddenCss";

export type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"div">;

const VisuallyHidden = React.forwardRef(function VisuallyHidden(
  props: VisuallyHiddenProps,
  ref: React.Ref<HTMLDivElement>
) {
  const css = getVisuallyHiddenCss();
  return <div ref={ref} css={css} {...props} />;
});

export default VisuallyHidden;
