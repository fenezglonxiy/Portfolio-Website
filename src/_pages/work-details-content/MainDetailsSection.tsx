/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getMainDetailsSectionCss from "./getMainDetailsSectionCss";
import clsx from "clsx";

export type MainDetailsSectionProps = React.ComponentPropsWithoutRef<"li">;

function MainDetailsSection(props: MainDetailsSectionProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getMainDetailsSectionCss(theme);

  return (
    <li className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default MainDetailsSection;
