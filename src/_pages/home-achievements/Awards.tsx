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

export type awardsProps = HomeAchievementsShowcaseProps & {
  /**
   * Control the achieved awards.
   */
  awards: Achievement[];

  children?: undefined | null;
};

function Awards(props: awardsProps) {
  const { awards, ...rest } = props;

  return (
    <HomeAchievementsShowcase {...rest}>
      <HomeAchievementType>Awards & Recognition</HomeAchievementType>

      <AchievementTimeline>
        {awards.map((award, idx) => (
          <React.Fragment key={idx}>
            <AchievementTimelineItem>
              <AchievementTimelineSeparator>
                <AchievementTimelineDot
                  svgHref={award.svgHref}
                  svgWidth={award.svgWidth}
                  svgHeight={award.svgHeight}
                />
              </AchievementTimelineSeparator>

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
    </HomeAchievementsShowcase>
  );
}

export default Awards;
