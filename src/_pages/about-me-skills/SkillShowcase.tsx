/** @jsxImportSource @emotion/react */

"use client";

import getSkillShowcaseCss from "./getSkillShowcaseCss";

export type SkillShowcaseProps = React.ComponentPropsWithoutRef<"div">;

function SkillShowcase(props: SkillShowcaseProps) {
  const css = getSkillShowcaseCss();

  return <div css={css} {...props} />;
}

export default SkillShowcase;
