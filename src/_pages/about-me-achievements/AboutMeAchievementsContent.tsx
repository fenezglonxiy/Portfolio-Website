/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";

import getAboutMeAchievementsContentCss from "./getAboutMeAchievementsContentCss";

export type AboutMeAchievementsContentProps =
  React.ComponentPropsWithoutRef<"div">;

function AboutMeAchievementsContent(props: AboutMeAchievementsContentProps) {
  const theme = useTheme();
  const css = getAboutMeAchievementsContentCss(theme);

  return <div css={css} {...props} />;
}

export default AboutMeAchievementsContent;
