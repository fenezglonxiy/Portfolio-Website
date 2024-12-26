import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import { Typography, TypographyProps } from "@/_components/Typography";

type HeroHeadingBaseProps = {
  /**
   * Control the variant of the typography.
   * @default "display"
   */
  variant?: TypographyProps["variant"];

  /**
   * Control the color of the typography.
   * @default "neutral-900"
   */
  color?: TypographyProps["color"];

  /**
   * Control the font-weight of the typography.
   */
  fontWeight?: TypographyProps["fontWeight"];

  /**
   * Control the transformation of text.
   */
  transform?: TypographyProps["transform"];
};

export interface HeroHeadingTypeMap<D extends React.ElementType = "h2"> {
  props: HeroHeadingBaseProps;
  defaultComponent: D;
}

export type HeroHeadingProps<
  D extends React.ElementType = HeroHeadingTypeMap["defaultComponent"]
> = OverrideProps<HeroHeadingTypeMap<D>, D>;

const HeroHeading = React.forwardRef(function HeroHeading(
  props: HeroHeadingProps,
  ref: React.Ref<HTMLHeadingElement>
) {
  const {
    children,
    variant = "display",
    color = "neutral-900",
    fontWeight,
    transform,
    ...rest
  } = props;

  return (
    <Typography
      ref={ref}
      component="h2"
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

HeroHeading.displayName = "HeroHeading";

export default HeroHeading;
