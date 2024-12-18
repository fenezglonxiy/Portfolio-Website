/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { Box } from "../box";
import getTimelineDotCss from "./getTimelineDotCss";
import { useTheme } from "@mui/material";

type TimelineDotBaseProps = {};

export interface TimelineDotTypeMap<D extends React.ElementType = "span"> {
  props: TimelineDotBaseProps;
  defaultComponent: D;
}

export type TimelineDotProps<
  D extends React.ElementType = TimelineDotTypeMap["defaultComponent"]
> = OverrideProps<TimelineDotTypeMap<D>, D> & {
  component?: React.ElementType;
};

const TimelineDot = React.forwardRef(function TimelineDot(
  props: TimelineDotProps,
  ref: React.Ref<HTMLSpanElement>
) {
  const { component = "span", ...rest } = props;
  const theme = useTheme();
  const css = getTimelineDotCss(theme);

  return <Box ref={ref} component={component} css={css} {...rest} />;
});

TimelineDot.displayName = "TimelineDot";

export default TimelineDot;
