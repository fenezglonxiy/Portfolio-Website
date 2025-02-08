/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getSkillShowcaseHeaderCss from "./getSkillShowcaseHeaderCss";

export type SkillShowcaseHeaderProps = React.ComponentPropsWithoutRef<"div">;

function SkillShowcaseHeader(props: SkillShowcaseHeaderProps) {
  const theme = useTheme();
  const css = getSkillShowcaseHeaderCss(theme);

  return <div css={css} {...props} />;
}

export default SkillShowcaseHeader;
