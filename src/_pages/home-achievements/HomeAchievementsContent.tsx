/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeAchievementsContentCss from "./getHomeAchievementsContentCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeAchievementsContent(props: Props) {
  const theme = useTheme();
  const css = getHomeAchievementsContentCss(theme);

  return <div css={css} {...props} />;
}

export default HomeAchievementsContent;
