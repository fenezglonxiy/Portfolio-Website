/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardContent, CardContentProps } from "@/_components/Card";

import getSkillCardContentCss from "./getSkillCardContentCss";

export type SkillCardContentProps = CardContentProps;

function SkillCardContent(props: SkillCardContentProps) {
  const theme = useTheme();
  const css = getSkillCardContentCss(theme);

  return <CardContent css={css} {...props} />;
}

export default SkillCardContent;
