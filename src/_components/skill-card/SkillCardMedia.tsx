/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardMedia, CardMediaProps } from "@/_components/Card";

import getSkillCardMediaCss from "./getSkillCardMediaCss";

export type SkillCardMediaProps = CardMediaProps;

function SkillCardMedia(props: SkillCardMediaProps) {
  const theme = useTheme();
  const css = getSkillCardMediaCss(theme);

  return <CardMedia css={css} {...props} />;
}

export default SkillCardMedia;
