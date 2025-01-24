/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardContent, CardContentProps } from "@/_components/Card";

import getHomeInsightCardContentCss from "./getHomeInsightCardContentCss";

export type HomeInsightCardContentProps = CardContentProps;

function HomeInsightCardContent(props: HomeInsightCardContentProps) {
  const theme = useTheme();
  const css = getHomeInsightCardContentCss(theme);

  return <CardContent css={css} {...props} />;
}

export default HomeInsightCardContent;
