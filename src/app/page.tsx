import { Metadata } from "next";

import { HomeHero } from "@/_pages/home-hero";
import { HomeSelectedWorks } from "@/_pages/home-selected-works";
import { HomeAboutMe } from "@/_pages/home-about-me";
import { ToolsInfiniteScroller } from "@/_pages/tools-infinite-scroller";
import { HomeTestimonials } from "@/_pages/home-testimonials";
import { HomeAchievements } from "@/_pages/home-achievements";
import { HomeInsights } from "@/_pages/home-insights";

export const metadata: Metadata = {
  title: "Home | TranHoangDat - Portfolio Website",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSelectedWorks />
      <HomeTestimonials />
      <HomeAboutMe />
      <ToolsInfiniteScroller />
      <HomeAchievements />
      <HomeInsights />
    </>
  );
}
