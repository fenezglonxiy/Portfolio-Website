import { Metadata } from "next";

import { AboutMeDownloadCV } from "@/_pages/about-me-download-cv";
import { AboutMeHero } from "@/_pages/about-me-hero";
import { AboutMeSkills } from "@/_pages/about-me-skills";
import { AboutMeTools } from "@/_pages/about-me-tools";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutMe() {
  return (
    <>
      <AboutMeHero />
      <AboutMeSkills />
      <AboutMeTools />
      <AboutMeDownloadCV />
    </>
  );
}
