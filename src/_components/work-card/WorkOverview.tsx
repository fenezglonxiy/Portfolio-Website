/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkOverviewCss from "./getWorkOverviewCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkOverview(props: Props) {
  const theme = useTheme();
  const css = getWorkOverviewCss(theme);

  return <div css={css} {...props} />;
}

export default WorkOverview;
