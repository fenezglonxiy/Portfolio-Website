import { Typography, TypographyProps } from "@/_components/Typography";
import React from "react";

export type SideDetailsTextProps = React.ComponentPropsWithoutRef<"p"> & {
  /**
   * Control the variant of the typography.
   * @default "body1Medium"
   */
  variant?: TypographyProps["variant"];

  /**
   * Control the color of the typography.
   * @default "neutral-550"
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

function SideDetailsText(props: SideDetailsTextProps) {
  const { variant = "body1Medium", color = "neutral-550", ...rest } = props;

  return <Typography variant={variant} color={color} {...rest} />;
}

export default SideDetailsText;
