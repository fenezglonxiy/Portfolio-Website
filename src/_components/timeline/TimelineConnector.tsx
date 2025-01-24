/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import { Box } from "@/_components/box";

import getTimelineConnectorCss from "./getTimelineConnectorCss";

type TimelineConnectorBaseProps = {};

export interface TimelineConnectorTypeMap<
  D extends React.ElementType = "span"
> {
  props: TimelineConnectorBaseProps;
  defaultComponent: D;
}

export type TimelineConnectorProps<
  D extends React.ElementType = TimelineConnectorTypeMap["defaultComponent"]
> = OverrideProps<TimelineConnectorTypeMap<D>, D> & {
  component?: React.ElementType;
};

const TimelineConnector = React.forwardRef(function TimelineConnector(
  props: TimelineConnectorProps,
  ref: React.Ref<HTMLSpanElement>
) {
  const { component = "span", ...rest } = props;
  const theme = useTheme();
  const css = getTimelineConnectorCss(theme);

  return <Box ref={ref} component={component} css={css} {...rest} />;
});

TimelineConnector.displayName = "TimelineConnector";

export default TimelineConnector;
