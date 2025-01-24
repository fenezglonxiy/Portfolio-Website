/** @jsxImportSource @emotion/react */

"use client";

import { Paper as MUIPaper, useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import { ThemeOptions } from "@mui/material/styles";
import React from "react";

import getPaperCss from "./getPaperCss";

type PaperBaseProps = {
  /**
   * The variant to use.
   * @default "elevation"
   */
  variant?: "elevation" | "outlined";

  /**
   * Control border-radius of the paper.
   * @default "xs"
   */
  borderRadius?: keyof Pick<
    NonNullable<ThemeOptions["shape"]>,
    "none" | "xs" | "sm" | "md" | "lg"
  >;

  /**
   * Shadow depth.
   * @default 1
   */
  elevation?: number;
};

export interface PaperTypeMap<D extends React.ElementType = "div"> {
  props: PaperBaseProps;
  defaultComponent: D;
}

export type PaperProps<
  D extends React.ElementType = PaperTypeMap["defaultComponent"]
> = OverrideProps<PaperTypeMap<D>, D> & { component?: React.ElementType };

const Paper = React.forwardRef(function Paper(
  props: PaperProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    variant = "elevation",
    borderRadius = "xs",
    elevation = 1,
    ...rest
  } = props;
  const theme = useTheme();
  const css = getPaperCss(theme, props);

  return (
    <MUIPaper
      ref={ref}
      variant={variant}
      elevation={elevation}
      css={css}
      {...rest}
    />
  );
});

Paper.displayName = "Paper";

export default Paper;
