/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkOverviewCss from "./getWorkOverviewCss";

export type WorkOverviewProps = React.ComponentPropsWithoutRef<"div">;

function WorkOverview(props: WorkOverviewProps) {
  const theme = useTheme();
  const css = getWorkOverviewCss(theme);

  return <div css={css} {...props} />;
}

export default WorkOverview;
