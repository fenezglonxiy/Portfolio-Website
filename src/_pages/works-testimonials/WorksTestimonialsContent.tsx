/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorksTestimonialsContentCss from "./getWorksTestimonialsContentCss";

export type WorksTestimonialsContentProps =
  React.ComponentPropsWithoutRef<"div">;

function WorksTestimonialsContent(props: WorksTestimonialsContentProps) {
  const theme = useTheme();
  const css = getWorksTestimonialsContentCss(theme);

  return <div css={css} {...props} />;
}

export default WorksTestimonialsContent;
