/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import getTimelineCss from "./getTimelineCss";

type TimelineBaseProps = {};

export interface TimelineTypeMap<D extends React.ElementType = "ul"> {
  props: TimelineBaseProps;
  defaultComponent: D;
}

export type TimelineProps<
  D extends React.ElementType = TimelineTypeMap["defaultComponent"]
> = OverrideProps<TimelineTypeMap<D>, D>;

const Timeline = React.forwardRef(function Timeline(
  props: TimelineProps,
  ref: React.Ref<HTMLUListElement>
) {
  const theme = useTheme();
  const css = getTimelineCss(theme);

  return <ul ref={ref} css={css} {...props} />;
});

Timeline.displayName = "Timeline";

export default Timeline;
