/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import { Box } from "@/_components/box";

import getTimelineSeparatorCss from "./getTimelineSeparatorCss";

type TimelineSeparatorBaseProps = {};

export interface TimelineSeparatorTypeMap<D extends React.ElementType = "div"> {
  props: TimelineSeparatorBaseProps;
  defaultComponent: D;
}

export type TimelineSeparatorProps<
  D extends React.ElementType = TimelineSeparatorTypeMap["defaultComponent"]
> = OverrideProps<TimelineSeparatorTypeMap<D>, D> & {
  component?: React.ElementType;
};

const TimelineSeparator = React.forwardRef(function TimelineSeparator(
  props: TimelineSeparatorProps,
  ref: React.Ref<HTMLDivElement>
) {
  const css = getTimelineSeparatorCss();

  return <Box ref={ref} css={css} {...props} />;
});

TimelineSeparator.displayName = "TimelineSeparator";

export default TimelineSeparator;
