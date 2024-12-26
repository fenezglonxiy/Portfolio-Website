/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import getTimelineItemCss from "./getTimelineItemCss";

type TimelineItemBaseProps = {};

export interface TimelineItemTypeMap<D extends React.ElementType = "li"> {
  props: TimelineItemBaseProps;
  defaultComponent: D;
}

export type TimelineItemProps<
  D extends React.ElementType = TimelineItemTypeMap["defaultComponent"]
> = OverrideProps<TimelineItemTypeMap<D>, D>;

const TimelineItem = React.forwardRef(function TimelineItem(
  props: TimelineItemProps,
  ref: React.Ref<HTMLLIElement>
) {
  const css = getTimelineItemCss();

  return <li ref={ref} css={css} {...props} />;
});

TimelineItem.displayName = "TimelineItem";

export default TimelineItem;
