/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getAboutMeAchievementsShowcaseCss from "./getAboutMeAchievementsShowcaseCss";

export type AboutMeAchievementsShowcaseProps =
  React.ComponentPropsWithoutRef<"div">;

function AboutMeAchievementsShowcase(props: AboutMeAchievementsShowcaseProps) {
  const theme = useTheme();
  const css = getAboutMeAchievementsShowcaseCss(theme);

  return <div css={css} {...props} />;
}

export default AboutMeAchievementsShowcase;
