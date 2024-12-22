/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getHomeAchievementsCss from "./getHomeAchievementsCss";
import HomeAchievementsContent from "./HomeAchievementsContent";
import WorkExperience from "./WorkExperience";
import Awards from "./Awards";
import { Achievement } from "@/types";
import moment from "moment";

export type HomeAchievementsProps =
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

function HomeAchievements(props: HomeAchievementsProps) {
  const theme = useTheme();
  const css = getHomeAchievementsCss(theme);

  return (
    <section css={css} {...props}>
      <HomeAchievementsContent>
        <WorkExperience workExperience={workExperience} />
        <Awards awards={awards} />
      </HomeAchievementsContent>
    </section>
  );
}

export default HomeAchievements;
