/** @jsxImportSource @emotion/react */

"use client";

import React from "react";

import PaginationLink, { PaginationLinkProps } from "./PaginationLink";

export type PaginationNextProps = PaginationLinkProps;

const PaginationNext = React.forwardRef(function PaginationNext(
  props: PaginationNextProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const {
    children = "Next",
    icon: iconFromProps,
    iconPosition: iconPositionFromProps,
    ...rest
  } = props;

  const iconPosition = !iconPositionFromProps ? "end" : iconPositionFromProps;

  const icon = !iconFromProps ? (
    <span>
      <i className="fa-duotone fa-regular fa-chevron-right fa-sm"></i>
    </span>
  ) : (
    iconFromProps
  );


  return (
    <PaginationLink
      ref={ref}
      aria-label="Go to next page"
      iconPosition={iconPosition}
      icon={icon}
      {...rest}
    >
      <span>{children}</span>
    </PaginationLink>
  );
});

PaginationNext.displayName = "PaginationNext";

export default PaginationNext;
