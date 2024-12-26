/** @jsxImportSource @emotion/react */

"use client";

import clsx from "clsx";
import { useTheme } from "@mui/material";

import getAboutMeDownloadCVContentCss from "./getAboutMeDownloadCVContentCss";

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
