import { Metadata } from "next";
import React from "react";

import { AboutMeAchievements } from "@/_pages/about-me-achievements";
import { AboutMeDownloadCV } from "@/_pages/about-me-download-cv";
import { AboutMeHero } from "@/_pages/about-me-hero";
import { AboutMeSkills } from "@/_pages/about-me-skills";
import { ToolsInfiniteScroller } from "@/_components/tools-infinite-scroller";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutMe() {
  return (
    <React.Fragment>
      <AboutMeHero />
      <AboutMeAchievements />
      <AboutMeSkills />
      <ToolsInfiniteScroller />
      <AboutMeDownloadCV />
    </React.Fragment>
  );
}
