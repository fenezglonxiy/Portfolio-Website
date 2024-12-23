/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { Typography, TypographyProps } from "../Typography";
import getSkillTitleCss from "./getSkillTitleCss";

export type SkillTitleProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Control the variant of the typography.
   * @default "h6"
   */
  variant?: TypographyProps["variant"];

  /**
   * Control the color of the typography.
   * @default "neutral-900"
   */
  color?: TypographyProps["color"];

  /**
   * Control the font-weight of the typography.
   * @default "semi-bold"
   */
  fontWeight?: TypographyProps["fontWeight"];

  /**
   * Control the transformation of text.
   */
  transform?: TypographyProps["transform"];
};

function SkillTitle(props: SkillTitleProps) {
  const {
    variant = "h6",
    color = "neutral-900",
    fontWeight = "semi-bold",
    ...rest
  } = props;
  const css = getSkillTitleCss();

  return (
    <Typography
      component="div"
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      css={css}
      {...rest}
    />
  );
}

export default SkillTitle;
