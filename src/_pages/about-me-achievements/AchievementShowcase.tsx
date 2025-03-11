/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getAchievementShowcaseCss from "./getAchievementShowcaseCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function AchievementShowcase(props: Props) {
  const theme = useTheme();
  const css = getAchievementShowcaseCss(theme);

  return <div css={css} {...props} />;
}

export default AchievementShowcase;
