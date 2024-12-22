/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { TimelineContent, TimelineContentProps } from "../timeline";
import getAchievementTimelineContentCss from "./getAchievementTimelineContentCss";

export type AchievementTimelineContentProps = TimelineContentProps;

function AchievementTimelineContent(props: AchievementTimelineContentProps) {
  const theme = useTheme();
  const css = getAchievementTimelineContentCss(theme);

  return <TimelineContent css={css} {...props} />;
}

export default AchievementTimelineContent;
