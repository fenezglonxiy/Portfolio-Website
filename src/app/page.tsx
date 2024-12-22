import { Metadata } from "next";
import { HomeHero } from "@/_pages/home-hero";
import React from "react";
import { HomeSelectedWorks } from "@/_pages/home-selected-works";
import { HomeAboutMe } from "@/_pages/home-about-me";
import { ToolsInfiniteScroller } from "@/_pages/tools-infinite-scroller";
import { HomeTestimonials } from "@/_pages/home-testimonials";
import { HomeAchievements } from "@/_pages/home-achievements";

export const metadata: Metadata = {};

export default function Home() {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeSelectedWorks />
      <HomeTestimonials />
      <HomeAboutMe />
      <ToolsInfiniteScroller />
      <HomeAchievements />
    </React.Fragment>
  );
}
