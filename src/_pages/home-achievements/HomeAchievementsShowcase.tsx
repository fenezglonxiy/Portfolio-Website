/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

export type HomeAchievementsShowcaseProps =
  React.ComponentPropsWithoutRef<"div">;

function HomeAchievementsShowcase(props: HomeAchievementsShowcaseProps) {
  const { className, ...rest } = props;
  const theme = useTheme();

  return <div className={clsx("flow-spacer-y", className)} {...rest} />;
}

export default HomeAchievementsShowcase;
