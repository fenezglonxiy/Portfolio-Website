/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import getProjectThumbnailContainer from "./getProjectThumbnailContainerCss";
import { useTheme } from "@mui/material";

export type ProjectThumbnailContainerProps =
  React.ComponentPropsWithoutRef<"div">;

function ProjectThumbnailContainer(props: ProjectThumbnailContainerProps) {
  const theme = useTheme();
  const css = getProjectThumbnailContainer(theme);

  return <div css={css} {...props} />;
}

export default ProjectThumbnailContainer;
