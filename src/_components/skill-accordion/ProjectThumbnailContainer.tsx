/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getProjectThumbnailContainer from "./getProjectThumbnailContainerCss";

export type ProjectThumbnailContainerProps =
  React.ComponentPropsWithoutRef<"div">;

function ProjectThumbnailContainer(props: ProjectThumbnailContainerProps) {
  const theme = useTheme();
  const css = getProjectThumbnailContainer(theme);

  return <div css={css} {...props} />;
}

export default ProjectThumbnailContainer;
