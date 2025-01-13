/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { awardTimelineItem, workExperienceTimelineItem } from "@/dummyData";

import getHomeAchievementsCss from "./getHomeAchievementsCss";
import HomeAchievementsContent from "./HomeAchievementsContent";
import WorkExperience from "./WorkExperience";
import Awards from "./Awards";

export type HomeAchievementsProps =
  React.ComponentPropsWithoutRef<"section"> & {
    children?: undefined | null;
  };

function HomeAchievements(props: HomeAchievementsProps) {
  const theme = useTheme();
  const css = getHomeAchievementsCss(theme);

  return (
    <section css={css} {...props}>
      <HomeAchievementsContent>
        <WorkExperience
          workExperience={Array(3).fill(workExperienceTimelineItem)}
        />
        <Awards awards={Array(3).fill(awardTimelineItem)} />
      </HomeAchievementsContent>
    </section>
  );
}

export default HomeAchievements;
