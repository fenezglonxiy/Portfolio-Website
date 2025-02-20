import { Metadata } from "next";

import { HomeHero } from "@/_pages/home-hero";
import { HomeSelectedWorks } from "@/_pages/home-selected-works";
import { HomeAboutMe } from "@/_pages/home-about-me";
import { HomeToolsInfiniteScroller } from "@/_pages/home-tools-infinite-scroller";

export const metadata: Metadata = {
  title: "Home | TranHoangDat - Portfolio Website",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSelectedWorks />
      <HomeToolsInfiniteScroller />
      <HomeAboutMe />
    </>
  );
}
