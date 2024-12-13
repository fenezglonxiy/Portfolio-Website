/** @jsxImportSource @emotion/react */

"use client";

import { CardContent, CardContentProps } from "@/_components/Card";
import { useTheme } from "@mui/material";
import getWorkCardContentCss from "./getWorkCardContentCss";

export type WorkCardContentProps = CardContentProps;

function WorkCardContent(props: WorkCardContentProps) {
  const theme = useTheme();
  const css = getWorkCardContentCss(theme);

  return <CardContent css={css} {...props} />;
}

export default WorkCardContent;
