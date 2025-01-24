/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { useTheme } from "@mui/material";

import { Box } from "@/_components/box";

import getTimelineContentCss from "./getTimelineContentCss";

type TimelineContentBaseProps = {};

export interface TimelineContentTypeMap<D extends React.ElementType = "div"> {
  props: TimelineContentBaseProps;
  defaultComponent: D;
}

export type TimelineContentProps<
  D extends React.ElementType = TimelineContentTypeMap["defaultComponent"]
> = OverrideProps<TimelineContentTypeMap<D>, D> & {
  component?: React.ElementType;
};

const TimelineContent = React.forwardRef(function TimelineContent(
  props: TimelineContentProps,
  ref: React.Ref<HTMLDivElement>
) {
  const theme = useTheme();
  const css = getTimelineContentCss(theme);

  return <Box ref={ref} css={css} {...props} />;
});

TimelineContent.displayName = "TimelineContent";

export default TimelineContent;
