/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardContent, CardContentProps } from "@/_components/Card";

import getInsightCardContentCss from "./getInsightCardContentCss";

type Props = CardContentProps;

function InsightCardContent(props: Props) {
  const theme = useTheme();
  const css = getInsightCardContentCss(theme);

  return <CardContent css={css} {...props} />;
}

export default InsightCardContent;
