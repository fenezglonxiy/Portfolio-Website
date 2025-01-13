/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import { Url } from "next/dist/shared/lib/router/router";

import { Typography, TypographyProps } from "@/_components/Typography";
import { Link } from "@/_components/Link";

import getInsightTitleCss from "./getInsightTitleCss";
import { InsightCardVariant } from "./types";

export type InsightTitleProps = Omit<
  React.HTMLAttributes<HTMLHeadingElement>,
  "color"
> & {
  /**
   * A URL or path to navigate to the insight details page.
   */
  href: Url;

  /**
   * The variant to use. It should match the insight card variant.
   * @default "base"
   */
  variant?: InsightCardVariant;
};

const componentByVariant: Record<
  NonNullable<InsightTitleProps["variant"]>,
  NonNullable<TypographyProps["component"]>
> = {
  home: "h4",
  sub: "h5",
  base: "h4",
  main: "h3",
};

function InsightTitle(props: InsightTitleProps) {
  const { href, variant = "base", children, ...rest } = props;
  const theme = useTheme();
  const css = getInsightTitleCss(theme, { ...props, variant });

  return (
    <Typography component={componentByVariant[variant]} {...rest}>
      <Link href={href} css={css}>
        {children}
      </Link>
    </Typography>
  );
}

export default InsightTitle;
