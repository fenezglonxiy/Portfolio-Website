/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { Box } from "../box";
import getTimelineDotCss from "./getTimelineDotCss";
import { useTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

type TimelineDotBaseProps = {
  /**
   * Control the dot shape.
   * @default "circle"
   */
  shape?: keyof NonNullable<ThemeOptions["shape"]>;

  /**
   * Control the dot size.
   * @default "sm"
   */
  size?: "sm" | "md";

  /**
   * Control the dot color.
   * @default "philippine-silver"
   */
  color?: "white" | "philippine-silver";
};

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
  const {
    component = "span",
    shape = "circle",
    size = "sm",
    color = "philippine-silver",
    ...rest
  } = props;
  const theme = useTheme();
  const css = getTimelineDotCss(theme, { ...props, shape, size, color });

  return <Box ref={ref} component={component} css={css} {...rest} />;
});

TimelineDot.displayName = "TimelineDot";

export default TimelineDot;
