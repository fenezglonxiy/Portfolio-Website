/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import getHeroContentCss from "./getHeroContentCss";

type HeroContentBaseProps = React.ComponentPropsWithoutRef<"div">;

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
  const theme = useTheme();
  const css = getHeroContentCss(theme);

  return <div ref={ref} css={css} {...props} />;
});

HeroContent.displayName = "HeroContent";

export default HeroContent;
