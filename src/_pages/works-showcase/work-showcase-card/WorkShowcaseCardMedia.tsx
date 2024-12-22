/** @jsxImportSource @emotion/react */

"use client";

import { CardMedia, CardMediaProps } from "@/_components/Card";
import { useTheme } from "@mui/material";
import getWorkShowcaseCardMediaCss from "./getWorkShowcaseCardMediaCss";

export type WorkShowcaseCardMediaProps = CardMediaProps;

function WorkShowcaseCardMedia(props: WorkShowcaseCardMediaProps) {
  const theme = useTheme();
  const css = getWorkShowcaseCardMediaCss(theme);

  return <CardMedia css={css} {...props} />;
}

export default WorkShowcaseCardMedia;
