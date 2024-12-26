import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import { Typography, TypographyProps } from "@/_components/Typography";

type HeroSubheadingBaseProps = {
  /**
   * Control the variant of the typography.
   * @default "subtitle2"
   */
  variant?: TypographyProps["variant"];

  /**
   * Control the color of the typography.
   * @default "neutral-700"
   */
  color?: TypographyProps["color"];

  /**
   * Control the font-weight of the typography.
   * @default "medium"
   */
  fontWeight?: TypographyProps["fontWeight"];

  /**
   * Control the transformation of text.
   */
  transform?: TypographyProps["transform"];
};

export interface HeroSubheadingTypeMap<D extends React.ElementType = "h3"> {
  props: HeroSubheadingBaseProps;
  defaultComponent: D;
}

export type HeroSubheadingProps<
  D extends React.ElementType = HeroSubheadingTypeMap["defaultComponent"]
> = OverrideProps<HeroSubheadingTypeMap<D>, D>;

const HeroSubheading = React.forwardRef(function HeroSubheading(
  props: HeroSubheadingProps,
  ref: React.Ref<HTMLHeadingElement>
) {
  const {
    children,
    variant = "subtitle2",
    color = "neutral-700",
    fontWeight = "medium",
    transform,
    ...rest
  } = props;

  return (
    <Typography
      ref={ref}
      component="h3"
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      transform={transform}
      {...rest}
    >
      {children}
    </Typography>
  );
});

HeroSubheading.displayName = "HeroSubheading";

export default HeroSubheading;
