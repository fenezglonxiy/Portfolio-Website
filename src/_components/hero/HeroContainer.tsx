/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import clsx from "clsx";
import React from "react";
import getHeroContainerCss from "./getHeroContainerCss";

type HeroContainerBaseProps = {
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

export interface HeroContainerTypeMap<D extends React.ElementType = "div"> {
  props: HeroContainerBaseProps;
  defaultComponent: D;
}

export type HeroContainerProps<
  D extends React.ElementType = HeroContainerTypeMap["defaultComponent"]
> = OverrideProps<HeroContainerTypeMap<D>, D>;

const HeroContainer = React.forwardRef(function HeroContainer(
  props: HeroContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { className, verticalSpacing = 4, textAlign = "left", ...rest } = props;
  const theme = useTheme();
  const css = getHeroContainerCss(theme, {
    ...props,
    verticalSpacing,
    textAlign,
  });

  return (
    <div
      ref={ref}
      className={clsx("flow-spacer-y", className)}
      css={css}
      {...rest}
    />
  );
});

HeroContainer.displayName = "HeroContainer";

export default HeroContainer;
