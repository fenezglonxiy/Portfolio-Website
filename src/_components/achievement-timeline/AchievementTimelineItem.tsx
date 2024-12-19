/** @jsxImportSource @emotion/react */

"use client";

import { TimelineItem, TimelineItemProps } from "../timeline";
import getAchievementTimelineItemCss from "./getAchievementTimelineItemCss";

export type AchievementTimelineItemProps = TimelineItemProps;

function AchievementTimelineItem(props: AchievementTimelineItemProps) {
  const css = getAchievementTimelineItemCss();

  return <TimelineItem css={css} {...props} />;
}

export default AchievementTimelineItem;
