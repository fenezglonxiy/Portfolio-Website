/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardContent, CardContentProps } from "@/_components/Card";

import getWorkCardContentCss from "./getWorkCardContentCss";

type Props = CardContentProps;

function WorkCardContent(props: Props) {
  const theme = useTheme();
  const css = getWorkCardContentCss(theme);

  return <CardContent css={css} {...props} />;
}

export default WorkCardContent;
