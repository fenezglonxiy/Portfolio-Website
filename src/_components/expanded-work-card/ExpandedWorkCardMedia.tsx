/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getExpandedWorkCardMediaCss from "./getExpandedWorkCardMediaCss";

type Props = CardMediaProps;

function ExpandedWorkCardMedia(props: Props) {
  const theme = useTheme();
  const css = getExpandedWorkCardMediaCss(theme);

  return <CardMedia css={css} {...props} />;
}

export default ExpandedWorkCardMedia;
