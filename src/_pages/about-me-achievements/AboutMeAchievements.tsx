"use client";

import { awards, workExperience } from "@/dummyData";

import AboutMeAchievementsContent from "./AboutMeAchievementsContent";
import WorkExperience from "./WorkExperience";
import Awards from "./Awards";

export type AboutMeAchievementsProps =
  React.ComponentPropsWithoutRef<"section"> & {
    children?: undefined | null;
  };

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
