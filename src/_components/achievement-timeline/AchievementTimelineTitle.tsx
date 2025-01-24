import React from "react";

import { Typography, TypographyProps } from "@/_components/Typography";

export type AchievementTimelineTitleProps =
  React.ComponentPropsWithoutRef<"p"> & {
    /**
     * Control the variant of the typography.
     * @default "body1Medium"
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

function AchievementTimelineTitle(props: AchievementTimelineTitleProps) {
  const { variant = "body1Medium", color = "neutral-900", ...rest } = props;

  return <Typography variant={variant} color={color} {...rest} />;
}

export default AchievementTimelineTitle;
