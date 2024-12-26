import React from "react";

import {
  AchievementTimeline,
  AchievementTimelineContent,
  AchievementTimelineDate,
  AchievementTimelineDivider,
  AchievementTimelineItem,
  AchievementTimelineReferenceLink,
  AchievementTimelineTitle,
} from "@/_components/achievement-timeline";
import { Achievement } from "@/types";

import AboutMeAchievementsShowcase, {
  AboutMeAchievementsShowcaseProps,
} from "./AboutMeAchievementsShowcase";
import AboutMeAchievementType from "./AboutMeAchievementType";

export type WorkExperienceProps = AboutMeAchievementsShowcaseProps & {
  /**
   * Control the work experience.
   */
  workExperience: Achievement[];

  children?: undefined | null;
};

function WorkExperience(props: WorkExperienceProps) {
  const { workExperience, ...rest } = props;

  return (
    <AboutMeAchievementsShowcase {...rest}>
      <AboutMeAchievementType>Work Experience</AboutMeAchievementType>

      <AchievementTimeline>
        {workExperience.map((exp, idx) => (
          <React.Fragment key={idx}>
            <AchievementTimelineItem>
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
    </AboutMeAchievementsShowcase>
  );
}

export default WorkExperience;
