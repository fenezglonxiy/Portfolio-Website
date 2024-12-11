/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";
import { useTheme } from "@mui/material";
import getWorkCardMediaCss from "./getWorkCardMediaCss";

export type WorkCardMediaProps = CardMediaProps;

function WorkCardMedia(props: WorkCardMediaProps) {
  const theme = useTheme();
  const css = getWorkCardMediaCss(theme);

  return <CardMedia css={css} {...props} />;
}

export default WorkCardMedia;
