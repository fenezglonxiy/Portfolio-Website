import React from "react";

import { Achievement } from "@/types";
import {
  AchievementTimeline,
  AchievementTimelineContent,
  AchievementTimelineDate,
  AchievementTimelineDivider,
  AchievementTimelineItem,
  AchievementTimelineReferenceLink,
  AchievementTimelineTitle,
} from "@/_components/achievement-timeline";

import AboutMeAchievementsShowcase, {
  AboutMeAchievementsShowcaseProps,
} from "./AboutMeAchievementsShowcase";
import AboutMeAchievementType from "./AboutMeAchievementType";

export type AwardsProps = AboutMeAchievementsShowcaseProps & {
  /**
   * Control the achieved awards.
   */
  awards: Achievement[];

  children?: undefined | null;
};

function Awards(props: AwardsProps) {
  const { awards, ...rest } = props;

  return (
    <AboutMeAchievementsShowcase {...rest}>
      <AboutMeAchievementType>Awards & Recognition</AboutMeAchievementType>

      <AchievementTimeline>
        {awards.map((award, idx) => (
          <React.Fragment key={idx}>
            <AchievementTimelineItem>
              <AchievementTimelineContent>
                <AchievementTimelineTitle>
                  {award.title}
                </AchievementTimelineTitle>

                <AchievementTimelineDate
                  achievementDate={award.achievementDate}
                  expiryDate={award.expiryDate}
                />
              </AchievementTimelineContent>

              {award.referenceHref && (
                <AchievementTimelineReferenceLink href={award.referenceHref} />
              )}
            </AchievementTimelineItem>
            {idx < awards.length - 1 && <AchievementTimelineDivider />}
          </React.Fragment>
        ))}
      </AchievementTimeline>
    </AboutMeAchievementsShowcase>
  );
}

export default Awards;
