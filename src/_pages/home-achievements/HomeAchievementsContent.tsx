/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeAchievementsContentCss from "./getHomeAchievementsContentCss";

export type HomeAchievementsContentProps =
  React.ComponentPropsWithoutRef<"div">;

function HomeAchievementsContent(props: HomeAchievementsContentProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getHomeAchievementsContentCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div css={css.container}>{children}</div>
    </div>
  );
}

export default HomeAchievementsContent;
