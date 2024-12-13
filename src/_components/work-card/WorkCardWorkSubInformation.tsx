/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";
import React from "react";
import getWorkCardWorkSubInformation from "./getWorkCardWorkSubInformation";

export type WorkCardWorkSubInformationProps =
  React.HTMLAttributes<HTMLDivElement>;

function WorkCardWorkSubInformation(props: WorkCardWorkSubInformationProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkCardWorkSubInformation(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default WorkCardWorkSubInformation;
