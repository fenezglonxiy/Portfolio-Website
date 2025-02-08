/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { useTheme } from "@mui/material";

import getAboutMeSkillsContentCss from "./getAboutMeSkillsContentCss";

export type AboutMeSkillsContentProps = React.ComponentPropsWithoutRef<"div">;

const AboutMeSkillsContent = React.forwardRef(function AboutMeSkillsContent(
  props: AboutMeSkillsContentProps,
  ref: React.Ref<HTMLDivElement>
) {
  const theme = useTheme();
  const css = getAboutMeSkillsContentCss(theme);

  return <div ref={ref} css={css} {...props} />;
});

AboutMeSkillsContent.displayName = "AboutMeSkillsContent";

export default AboutMeSkillsContent;
