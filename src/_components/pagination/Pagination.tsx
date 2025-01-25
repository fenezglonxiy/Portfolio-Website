/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import getPaginationCss from "./getPaginationCss";

type PaginationBaseProps = React.ComponentPropsWithoutRef<"nav">;

export interface PaginationTypeMap<D extends React.ElementType = "nav"> {
  props: PaginationBaseProps;
  defaultComponent: D;
}

export type PaginationProps<
  D extends React.ElementType = PaginationTypeMap["defaultComponent"]
> = OverrideProps<PaginationTypeMap<D>, D>;

const Pagination = React.forwardRef(function Pagination(
  props: PaginationProps,
  ref: React.Ref<HTMLDivElement>
) {
  const css = getPaginationCss();

  return (
    <nav
      ref={ref}
      css={css}
      {...props}
      role="navigation"
      aria-label="pagination"
    />
  );
});

Pagination.displayName = "Pagination";

export default Pagination;
