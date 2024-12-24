/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getHomeInsightsShowcaseCss from "./getHomeInsightsShowcaseCss";

export type HomeInsightsShowcaseProps = React.ComponentPropsWithoutRef<"div">;

function HomeInsightsShowcase(props: HomeInsightsShowcaseProps) {
  const theme = useTheme();
  const css = getHomeInsightsShowcaseCss(theme);

  return <div css={css} {...props} />;
}

export default HomeInsightsShowcase;
