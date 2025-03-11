import { Metadata } from "next";

import { HomeHero } from "@/_pages/home-hero";
import { HomeSelectedWorks } from "@/_pages/home-selected-works";
import { HomeAboutMe } from "@/_pages/home-about-me";
import { HomeToolsInfiniteScroller } from "@/_pages/home-tools-infinite-scroller";
import { PageTransitionPageWrapper } from "@/_pages/page-transition";

export const metadata: Metadata = {
  title: "Home | TranHoangDat - Portfolio Website",
};

export default function Home() {
  return (
    <PageTransitionPageWrapper>
      <HomeHero />
      <HomeSelectedWorks />
      <HomeToolsInfiniteScroller />
      <HomeAboutMe />
    </PageTransitionPageWrapper>
  );
}
