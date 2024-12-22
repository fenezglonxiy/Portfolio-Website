/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import getHeroActionsCss from "./getHeroActionsCss";

type HeroActionsBaseProps = {};

export interface HeroActionsTypeMap<D extends React.ElementType = "div"> {
  props: HeroActionsBaseProps;
  defaultComponent: D;
}

export type HeroActionsProps<
  D extends React.ElementType = HeroActionsTypeMap["defaultComponent"]
> = OverrideProps<HeroActionsTypeMap<D>, D>;

const HeroActions = React.forwardRef(function HeroActions(
  props: HeroActionsProps,
  ref: React.Ref<HTMLDivElement>
) {
  const theme = useTheme();
  const css = getHeroActionsCss(theme);

  return <div ref={ref} css={css} {...props} />;
});

HeroActions.displayName = "HeroActions";

export default HeroActions;
