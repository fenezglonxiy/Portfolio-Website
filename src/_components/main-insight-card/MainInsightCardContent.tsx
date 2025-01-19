/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardContent, CardContentProps } from "@/_components/Card";

import getMainInsightCardContentCss from "./getMainInsightCardContentCss";

export type MainInsightCardContentProps = CardContentProps;

function MainInsightCardContent(props: MainInsightCardContentProps) {
  const theme = useTheme();
  const css = getMainInsightCardContentCss(theme);

  return <CardContent css={css} {...props} />;
}

export default MainInsightCardContent;
