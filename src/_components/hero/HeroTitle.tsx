import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import { Typography, TypographyProps } from "@/_components/Typography";

export type HeroTitleBaseProps = {
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
   * @default "medium"
   */
  fontWeight?: TypographyProps["fontWeight"];

  /**
   * Control the transformation of text.
   */
  transform?: TypographyProps["transform"];
};

export interface HeroTitleTypeMap<D extends React.ElementType = "h1"> {
  props: HeroTitleBaseProps;
  defaultComponent: D;
}

export type HeroTitleProps<
  D extends React.ElementType = HeroTitleTypeMap["defaultComponent"]
> = OverrideProps<HeroTitleTypeMap<D>, D>;

const HeroTitle = React.forwardRef(function HeroTitle(
  props: HeroTitleProps,
  ref: React.Ref<HTMLHeadingElement>
) {
  const {
    children,
    variant = "subtitle2",
    color = "neutral-900",
    fontWeight = "medium",
    ...rest
  } = props;

  return (
    <Typography
      ref={ref}
      component="h1"
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </Typography>
  );
});

HeroTitle.displayName = "HeroTitle";

export default HeroTitle;
