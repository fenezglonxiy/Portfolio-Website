/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getAboutMeAchievementsContainerCss from "./getAboutMeAchievementsContainerCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function AboutMeAchievementsContainer(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getAboutMeAchievementsContainerCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default AboutMeAchievementsContainer;
