/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getAboutMeDownloadCVContentCss from "./getAboutMeDownloadCVContentCss";
import clsx from "clsx";

export type AboutMeDownloadCVContentProps =
  React.HTMLAttributes<HTMLDivElement>;

function AboutMeDownloadCVContent(props: AboutMeDownloadCVContentProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getAboutMeDownloadCVContentCss(theme);

  return (
    <div css={css} className={clsx("flow-spacer-y", className)} {...rest} />
  );
}

export default AboutMeDownloadCVContent;
