/** @jsxImportSource @emotion/react */

"use client";

import { Typography } from "@/_components/Typography";

import getSkillDescriptionCss from "./getSkillDescriptionCss";

export type SkillDescriptionProps = React.ComponentPropsWithoutRef<"div">;

function SkillDescription(props: SkillDescriptionProps) {
  const { children, ...rest } = props;
  const css = getSkillDescriptionCss();

  return (
    <div css={css} {...rest}>
      <Typography variant="body1Medium" fontWeight="regular">
        {children}
      </Typography>
    </div>
  );
}

export default SkillDescription;
