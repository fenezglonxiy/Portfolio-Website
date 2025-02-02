/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkShowcaseCardSectionBoxCss from "./getWorkShowcaseCardSectionBoxCss";

export type WorkShowcaseCardSectionBoxProps =
  React.ComponentPropsWithoutRef<"div">;

function WorkShowcaseCardSectionBox(props: WorkShowcaseCardSectionBoxProps) {
  const theme = useTheme();
  const css = getWorkShowcaseCardSectionBoxCss(theme);

  return <div css={css} {...props} />;
}

export default WorkShowcaseCardSectionBox;
