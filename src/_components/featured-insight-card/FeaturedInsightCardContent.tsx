/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardContent, CardContentProps } from "@/_components/Card";

import getFeaturedInsightCardContentCss from "./getFeaturedInsightCardContentCss";

export type FeaturedInsightCardContentProps = CardContentProps;

function FeaturedInsightCardContent(props: FeaturedInsightCardContentProps) {
  const theme = useTheme();
  const css = getFeaturedInsightCardContentCss(theme);

  return <CardContent css={css} {...props} />;
}

export default FeaturedInsightCardContent;
