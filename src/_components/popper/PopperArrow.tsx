/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import clsx from "clsx";
import { useTheme } from "@mui/material";

import getPopperArrowCss from "./getPopperArrowCss";

type PopperArrowBaseProps = React.ComponentPropsWithoutRef<"span">;

export interface PopperArrowTypeMap<D extends React.ElementType = "span"> {
  props: PopperArrowBaseProps;
  defaultComponent: D;
}

export type PopperArrowProps<
  D extends React.ElementType = PopperArrowTypeMap["defaultComponent"]
> = OverrideProps<PopperArrowTypeMap<D>, D>;

const PopperArrow = React.forwardRef(function PopperArrow(
  props: PopperArrowProps,
  ref: React.Ref<HTMLSpanElement>
) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getPopperArrowCss(theme);

  return (
    <span
      ref={ref}
      css={css}
      className={clsx("popper-arrow", className)}
      {...rest}
    />
  );
});

PopperArrow.displayName = "PopperArrow";

export default PopperArrow;
