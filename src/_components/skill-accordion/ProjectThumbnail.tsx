/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import getProjectThumbnailCss from "./getProjectThumbnailCss";
import { useTheme } from "@mui/material";

export type ProjectThumbnailProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
  /**
   * The thumbnail source.
   */
  src: string;

  /**
   * The alternative text for the thumbnail.
   */
  alt?: string;
};

function ProjectThumbnail(props: ProjectThumbnailProps) {
  const { src, alt, ...rest } = props;
  const theme = useTheme();
  const css = getProjectThumbnailCss(theme);

  return (
    <div css={css} {...rest}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default ProjectThumbnail;
