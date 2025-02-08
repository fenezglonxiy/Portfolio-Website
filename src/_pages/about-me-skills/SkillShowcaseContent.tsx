/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";

import getSkillShowcaseContentCss from "./getSkillShowcaseContentCss";

export type SkillShowcaseContentProps = React.ComponentPropsWithoutRef<"div">;

function SkillShowcaseContent(props: SkillShowcaseContentProps) {
  const theme = useTheme();
  const css = getSkillShowcaseContentCss(theme);

  return <div css={css} {...props} />;
}

export default SkillShowcaseContent;
