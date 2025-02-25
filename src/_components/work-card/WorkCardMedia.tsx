/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getWorkCardMediaCss from "./getWorkCardMediaCss";

type Props = CardMediaProps;

function WorkCardMedia(props: Props) {
  const theme = useTheme();
  const css = getWorkCardMediaCss(theme);

  return <CardMedia css={css} {...props} />;
}

export default WorkCardMedia;
