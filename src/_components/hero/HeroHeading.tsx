/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography, TypographyProps } from "@/_components/Typography";

import getHeroHeadingCss from "./getHeroHeadingCss";

export type HeroHeadingProps = React.ComponentPropsWithoutRef<"h2"> & {
  /**
   * Control the color of the typography.
   *
   * @default "neutral-900"
   */
  color?: TypographyProps["color"];

  /**
   * Control the transformation of text.
   *
   * @default "none"
   */
  transform?: TypographyProps["transform"];
};

function HeroHeading(props: HeroHeadingProps) {
  const { color = "neutral-900", transform = "none", ...rest } = props;
  const theme = useTheme();
  const css = getHeroHeadingCss(theme);

  return (
    <Typography
      component="h2"
      variant="display"
      color={color}
      transform={transform}
      css={css}
      {...rest}
    />
  );
}

export default HeroHeading;
