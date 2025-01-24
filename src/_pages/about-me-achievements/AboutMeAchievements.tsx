"use client";

import { awardTimelineItem, workExperienceTimelineItem } from "@/dummyData";

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
        <WorkExperience
          workExperience={Array(3).fill(workExperienceTimelineItem)}
        />

        <Awards awards={Array(3).fill(awardTimelineItem)} />
      </AboutMeAchievementsContent>
    </section>
  );
}

export default AboutMeAchievements;
