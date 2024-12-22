import { Typography, TypographyProps } from "@/_components/Typography";
import React from "react";

export type AboutMeAchievementTypeProps =
  React.ComponentPropsWithoutRef<"h3"> & {
    /**
     * Control the variant of the typography.
     * @default "h4"
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
     * @default "capitalize"
     */
    transform?: TypographyProps["transform"];
  };

function AboutMeAchievementType(props: AboutMeAchievementTypeProps) {
  const { variant = "h4", color = "neutral-900", ...rest } = props;

  return (
    <Typography component="h3" variant={variant} color={color} {...rest} />
  );
}

export default AboutMeAchievementType;
