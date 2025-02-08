/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getSkillCardContainerCss from "./getSkillCardContainerCss";

export type SkillCardContainerProps = React.ComponentPropsWithoutRef<"div">;

function SkillCardContainer(props: SkillCardContainerProps) {
  const theme = useTheme();
  const css = getSkillCardContainerCss(theme);

  return <div css={css} {...props} />;
}

export default SkillCardContainer;
