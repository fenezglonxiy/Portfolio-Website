/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import React from "react";

import { Link } from "@/_components/Link";

import getVisuallyHiddenCss from "./getVisuallyHiddenCss";

type VisuallyHiddenBaseProps = {
  /**
   * If a value is provided, there will be an `<a>` mask cover the whole
   * component.
   */
  href?: Url;

  /**
   * The visually hidden label of the `<a>` mask.
   */
  label?: string;
};

export interface VisuallyHiddenTypeMap<D extends React.ElementType = "div"> {
  props: VisuallyHiddenBaseProps;
  defaultComponent: D;
}

export type VisuallyHiddenProps<
  D extends React.ElementType = VisuallyHiddenTypeMap["defaultComponent"]
> = OverrideProps<VisuallyHiddenTypeMap<D>, D>;

const VisuallyHidden = React.forwardRef(function VisuallyHidden(
  props: VisuallyHiddenProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { href, label, className, children, ...rest } = props;
  const css = getVisuallyHiddenCss();

  return (
    <div
      ref={ref}
      className={clsx(href === undefined && "visually-hidden", className)}
      css={css}
      {...rest}
    >
      {children}

      {href && (
        <Link href={href}>
          <span className="visually-hidden">{label}</span>
        </Link>
      )}
    </div>
  );
});

export default VisuallyHidden;
