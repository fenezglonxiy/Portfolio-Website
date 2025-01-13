/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import getPaginationContentCss from "./getPaginationContentCss";

type PaginationContentBaseProps = {};

export interface PaginationContentTypeMap<D extends React.ElementType = "ul"> {
  props: PaginationContentBaseProps;
  defaultComponent: D;
}

export type PaginationContentProps<
  D extends React.ElementType = PaginationContentTypeMap["defaultComponent"]
> = OverrideProps<PaginationContentTypeMap<D>, D>;

const PaginationContent = React.forwardRef(function PaginationContent(
  props: PaginationContentProps,
  ref: React.Ref<HTMLUListElement>
) {
  const theme = useTheme();
  const css = getPaginationContentCss(theme);

  return <ul ref={ref} css={css} {...props} />;
});

PaginationContent.displayName = "PaginationContent";

export default PaginationContent;
