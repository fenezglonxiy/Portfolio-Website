/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getWorkCardWorkOverviewCss from "./getWorkCardWorkOverviewCss";
import clsx from "clsx";

export type WorkCardWorkOverviewProps = React.HTMLAttributes<HTMLDivElement>;

function WorkCardWorkOverview(props: WorkCardWorkOverviewProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkCardWorkOverviewCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default WorkCardWorkOverview;
