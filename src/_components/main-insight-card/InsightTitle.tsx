/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import { Url } from "next/dist/shared/lib/router/router";

import { Typography, TypographyProps } from "@/_components/Typography";
import { Link } from "@/_components/Link";

import getInsightTitleCss from "./getInsightTitleCss";

export type InsightTitleProps = Omit<
  React.HTMLAttributes<HTMLHeadingElement>,
  "color"
> & {
  /**
   * A URL or path to navigate to the insight details page.
   */
  href: Url;
};

function InsightTitle(props: InsightTitleProps) {
  const { href, children, ...rest } = props;
  const theme = useTheme();
  const css = getInsightTitleCss(theme);

  return (
    <Typography component="h3" css={css} {...rest}>
      <Link href={href} variant="inherit" color="inherit">
        {children}
      </Link>
    </Typography>
  );
}

export default InsightTitle;
