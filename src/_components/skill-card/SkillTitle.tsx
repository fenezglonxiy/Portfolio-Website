/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";

import getSkillTitleCss from "./getSkillTitleCss";

export type SkillTitleProps = Omit<
  React.ComponentPropsWithoutRef<"h1">,
  "color"
>;

function SkillTitle(props: SkillTitleProps) {
  const theme = useTheme();
  const css = getSkillTitleCss(theme);

  return <Typography component="h3" css={css} {...props} />;
}

export default SkillTitle;
