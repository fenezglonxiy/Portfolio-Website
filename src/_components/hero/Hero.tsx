import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

type HeroBaseProps = React.ComponentPropsWithoutRef<"div">;

export interface HeroTypeMap<D extends React.ElementType = "div"> {
  props: HeroBaseProps;
  defaultComponent: D;
}

export type HeroProps<
  D extends React.ElementType = HeroTypeMap["defaultComponent"]
> = OverrideProps<HeroTypeMap<D>, D> & { component?: React.ElementType };

const Hero = React.forwardRef(function Hero(
  props: HeroProps,
  ref: React.Ref<HTMLDivElement>
) {
  return <section ref={ref} {...props} />;
});

Hero.displayName = "Hero";

export default Hero;
