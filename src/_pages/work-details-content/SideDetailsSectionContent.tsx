/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import getSideDetailsSectionContentCss from "./getSideDetailsSectionContentCss";
import { useTheme } from "@mui/material";

export type SideDetailsSectionContentProps =
  React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Control the content orientation.
     * @default "horizontal"
     */
    orientation?: "vertical" | "horizontal";
  };

function SideDetailsSectionContent(props: SideDetailsSectionContentProps) {
  const { orientation = "horizontal", ...rest } = props;
  const theme = useTheme();
  const css = getSideDetailsSectionContentCss(theme, { ...props, orientation });

  return <div css={css} {...rest} />;
}

export default SideDetailsSectionContent;
