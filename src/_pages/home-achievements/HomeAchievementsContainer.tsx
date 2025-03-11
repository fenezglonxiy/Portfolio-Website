/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeAchievementsContainerCss from "./getHomeAchievementsContainerCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeAchievementsContainer(props: Props) {
  const theme = useTheme();
  const css = getHomeAchievementsContainerCss(theme);

  return <div css={css} {...props} />;
}

export default HomeAchievementsContainer;
