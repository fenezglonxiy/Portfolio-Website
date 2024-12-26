"use client";

import moment from "moment";

import { Achievement } from "@/types";

import AboutMeAchievementsContent from "./AboutMeAchievementsContent";
import WorkExperience from "./WorkExperience";
import Awards from "./Awards";

export type AboutMeAchievementsProps =
  React.ComponentPropsWithoutRef<"section"> & {
    children?: undefined | null;
  };

const workExperience: Achievement[] = [
  {
    svgHref: "google.svg#google",
    svgWidth: 24,
    svgHeight: 24,
    title: "Web developer at Google",
    date: moment("202402", "YYYYMM"),
    duration: moment.duration(moment().diff(moment("202402", "YYYYMM"))),
    referenceHref: "/",
  },
  {
    svgHref: "google.svg#google",
    svgWidth: 24,
    svgHeight: 24,
    title: "Web developer at Google",
    date: moment("202402", "YYYYMM"),
    duration: moment.duration(moment().diff(moment("202402", "YYYYMM"))),
    referenceHref: "/",
  },
  {
    svgHref: "google.svg#google",
    svgWidth: 24,
    svgHeight: 24,
    title: "Web developer at Google",
    date: moment("202402", "YYYYMM"),
    duration: moment.duration(moment().diff(moment("202402", "YYYYMM"))),
    referenceHref: "/",
  },
];

const awards: Achievement[] = [
  {
    svgHref: "google.svg#google",
    svgWidth: 24,
    svgHeight: 24,
    title: "Web developer at Google",
    date: moment("202402", "YYYYMM"),
    referenceHref: "/",
  },
  {
    svgHref: "google.svg#google",
    svgWidth: 24,
    svgHeight: 24,
    title: "Web developer at Google",
    date: moment("202402", "YYYYMM"),
    referenceHref: "/",
  },
  {
    svgHref: "google.svg#google",
    svgWidth: 24,
    svgHeight: 24,
    title: "Web developer at Google",
    date: moment("202402", "YYYYMM"),
    referenceHref: "/",
  },
];

function AboutMeAchievements(props: AboutMeAchievementsProps) {
  return (
    <section {...props}>
      <AboutMeAchievementsContent>
        <WorkExperience workExperience={workExperience} />

        <Awards awards={awards} />
      </AboutMeAchievementsContent>
    </section>
  );
}

export default AboutMeAchievements;
