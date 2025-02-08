/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getAboutMeSkillsCTACss from "./getAboutMeSkillsCTACss";

export type AboutMeSkillsCTAProps = React.ComponentPropsWithoutRef<"div">;

function AboutMeSkillsCTA(props: AboutMeSkillsCTAProps) {
  const theme = useTheme();
  const css = getAboutMeSkillsCTACss(theme);

  return <div css={css} {...props} />;
}

export default AboutMeSkillsCTA;
