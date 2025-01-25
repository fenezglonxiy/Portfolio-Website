/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import getBreadcrumbsSeparatorCss from "./getBreadcrumbsSeparatorCss";

type BreadcrumbsSeparatorBaseProps = React.ComponentPropsWithoutRef<"span">;

export interface BreadcrumbsSeparatorTypeMap<
  D extends React.ElementType = "span"
> {
  props: BreadcrumbsSeparatorBaseProps;
  defaultComponent: D;
}

export type BreadcrumbsSeparatorProps<
  D extends React.ElementType = BreadcrumbsSeparatorTypeMap["defaultComponent"]
> = OverrideProps<BreadcrumbsSeparatorTypeMap<D>, D>;

const BreadcrumbsSeparator = React.forwardRef(function BreadcrumbsSeparator(
  props: BreadcrumbsSeparatorProps,
  ref: React.Ref<HTMLSpanElement>
) {
  const theme = useTheme();
  const css = getBreadcrumbsSeparatorCss(theme);

  return <span ref={ref} css={css} {...props} aria-hidden />;
});

export default BreadcrumbsSeparator;
