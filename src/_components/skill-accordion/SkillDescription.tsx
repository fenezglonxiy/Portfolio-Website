/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { Typography, TypographyProps } from "../Typography";
import getSkillDescriptionCss from "./getSkillDescriptionCss";

export type SkillDescriptionProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Control the variant of the typography.
   * @default "body2Medium"
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

function SkillDescription(props: SkillDescriptionProps) {
  const { variant = "body2Medium", color = "neutral-550", ...rest } = props;
  const css = getSkillDescriptionCss();

  return (
    <Typography
      component="div"
      variant={variant}
      color={color}
      css={css}
      {...rest}
    />
  );
}

export default SkillDescription;
