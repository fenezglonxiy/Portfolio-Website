/** @jsxImportSource @emotion/react */

"use client";

import getSkillItemCss from "./getSkillItemCss";

export type SkillItemProps = React.ComponentPropsWithoutRef<"li">;

function SkillItem(props: SkillItemProps) {
  const css = getSkillItemCss();

  return <li css={css} {...props} />;
}

export default SkillItem;
