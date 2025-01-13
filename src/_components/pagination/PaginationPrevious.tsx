/** @jsxImportSource @emotion/react */

"use client";

import React from "react";

import PaginationLink, { PaginationLinkProps } from "./PaginationLink";

export type PaginationPreviousProps = PaginationLinkProps;

const PaginationPrevious = React.forwardRef(function PaginationPrevious(
  props: PaginationPreviousProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const {
    children = "Previous",
    icon: iconFromProps,
    iconPosition: iconPositionFromProps,
    ...rest
  } = props;

  const iconPosition = !iconPositionFromProps ? "start" : iconPositionFromProps;

  const icon = !iconFromProps ? (
    <span>
      <i className="fa-duotone fa-regular fa-chevron-left fa-sm"></i>
    </span>
  ) : (
    iconFromProps
  );

  return (
    <PaginationLink
      ref={ref}
      aria-label="Go to previous page"
      iconPosition={iconPosition}
      icon={icon}
      {...rest}
    >
      <span>{children}</span>
    </PaginationLink>
  );
});

PaginationPrevious.displayName = "PaginationPrevious";

export default PaginationPrevious;
