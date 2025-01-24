/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardContent, CardContentProps } from "@/_components/Card";

import getSubInsightCardContentCss from "./getSubInsightCardContentCss";

export type SubInsightCardContentProps = CardContentProps;

function SubInsightCardContent(props: SubInsightCardContentProps) {
  const theme = useTheme();
  const css = getSubInsightCardContentCss(theme);

  return <CardContent css={css} {...props} />;
}

export default SubInsightCardContent;
