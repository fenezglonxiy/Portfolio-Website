/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import clsx from "clsx";

import getHeroContentCss from "./getHeroContentCss";

type HeroContentBaseProps = {
  /**
   * Control the vertical spacing between children.
   *
   * The spacing is calculated by `theme.spacing()` function.
   * @default 4
   */
  verticalSpacing?: number;

  /**
   * Control the `text-align` CSS attribute value.
   * @default "left"
   */
  textAlign?: "left" | "center" | "right";
};

export interface HeroContentTypeMap<D extends React.ElementType = "div"> {
  props: HeroContentBaseProps;
  defaultComponent: D;
}

export type HeroContentProps<
  D extends React.ElementType = HeroContentTypeMap["defaultComponent"]
> = OverrideProps<HeroContentTypeMap<D>, D>;

const HeroContent = React.forwardRef(function HeroContent(
  props: HeroContentProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { className, verticalSpacing = 4, textAlign = "left", ...rest } = props;
  const theme = useTheme();
  const css = getHeroContentCss(theme, { ...props, verticalSpacing });

  return (
    <div
      ref={ref}
      css={css}
      className={clsx("flow-spacer-y", className)}
      {...rest}
    />
  );
});

HeroContent.displayName = "HeroContent";

export default HeroContent;
