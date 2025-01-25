/** @jsxImportSource @emotion/react */

"use client";

import React from "react";

import { VisuallyHidden } from "@/_components/visually-hidden";
import { Typography, TypographyProps } from "@/_components/Typography";

import getPaginationEllipsisCss from "./getPaginationEllipsisCss";

export type PaginationEllipsisProps = TypographyProps;

const PaginationEllipsis = React.forwardRef(function PaginationEllipsis(
  props: PaginationEllipsisProps,
  ref: React.Ref<HTMLSpanElement>
) {
  const { children, ...rest } = props;
  const css = getPaginationEllipsisCss();
  const body = children ? (
    children
  ) : (
    <span css={css.more}>
      <i className="fa-regular fa-ellipsis"></i>
    </span>
  );

  return (
    <Typography ref={ref} component="span" aria-hidden css={css.root} {...rest}>
      {body}
      <VisuallyHidden>More page</VisuallyHidden>
    </Typography>
  );
});

PaginationEllipsis.displayName = "PaginationEllipsis";

export default PaginationEllipsis;
