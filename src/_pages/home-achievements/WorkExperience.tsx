import React from "react";

import {
  AchievementTimeline,
  AchievementTimelineContent,
  AchievementTimelineDate,
  AchievementTimelineDivider,
  AchievementTimelineDot,
  AchievementTimelineItem,
  AchievementTimelineReferenceLink,
  AchievementTimelineSeparator,
  AchievementTimelineTitle,
} from "@/_components/achievement-timeline";
import { Achievement } from "@/types";

import HomeAchievementType from "./HomeAchievementType";
import HomeAchievementsShowcase, {
  HomeAchievementsShowcaseProps,
} from "./HomeAchievementsShowcase";

export type WorkExperienceProps = HomeAchievementsShowcaseProps & {
  /**
   * Control the work experience.
   */
  workExperience: Achievement[];

  children?: undefined | null;
};

function WorkExperience(props: WorkExperienceProps) {
  const { workExperience, ...rest } = props;

  return (
    <HomeAchievementsShowcase {...rest}>
      <HomeAchievementType>Work experience</HomeAchievementType>

      <AchievementTimeline>
        {workExperience.map((exp, idx) => (
          <React.Fragment key={idx}>
            <AchievementTimelineItem>
              <AchievementTimelineSeparator>
                <AchievementTimelineDot
                  svgHref={exp.svgHref}
                  svgWidth={exp.svgWidth}
                  svgHeight={exp.svgHeight}
                />
              </AchievementTimelineSeparator>

              <AchievementTimelineContent>
                <AchievementTimelineTitle>{exp.title}</AchievementTimelineTitle>

                <AchievementTimelineDate
                  date={exp.date}
                  duration={exp.duration}
                />
              </AchievementTimelineContent>

              {exp.referenceHref && (
                <AchievementTimelineReferenceLink href={exp.referenceHref} />
              )}
            </AchievementTimelineItem>
            {idx < workExperience.length - 1 && <AchievementTimelineDivider />}
          </React.Fragment>
        ))}
      </AchievementTimeline>
    </HomeAchievementsShowcase>
  );
}

export default WorkExperience;
