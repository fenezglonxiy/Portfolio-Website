import { AboutMeAchievements } from "@/_pages/about-me-achievements";
import { AboutMeDownloadCV } from "@/_pages/about-me-download-cv";
import { AboutMeHero } from "@/_pages/about-me-hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {};

export default function AboutMe() {
  return (
    <React.Fragment>
      <AboutMeHero />
      <AboutMeAchievements />
      <AboutMeDownloadCV />
    </React.Fragment>
  );
}
