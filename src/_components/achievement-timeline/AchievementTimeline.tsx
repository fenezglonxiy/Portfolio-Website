/** @jsxImportSource @emotion/react */

"use client";

import clsx from "clsx";

import { useTheme } from "@mui/material";

import { Timeline, TimelineProps } from "@/_components/timeline";

import getAchievementTimelineCss from "./getAchievementTimelineCss";

export type AchievementTimelineProps = TimelineProps;

function AchievementTimeline(props: AchievementTimelineProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getAchievementTimelineCss(theme);

  return (
    <Timeline
      className={clsx("flow-spacer-y", className)}
      css={css}
      {...rest}
    />
  );
}

export default AchievementTimeline;
