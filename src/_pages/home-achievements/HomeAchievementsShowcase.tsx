/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";
import getHomeAchievementsShowcaseCss from "./getHomeAchievementsShowcaseCss";

export type HomeAchievementsShowcaseProps =
  React.ComponentPropsWithoutRef<"div">;

function HomeAchievementsShowcase(props: HomeAchievementsShowcaseProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getHomeAchievementsShowcaseCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default HomeAchievementsShowcase;
