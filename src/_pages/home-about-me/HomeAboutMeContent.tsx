/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeAboutMeContentCss from "./getHomeAboutMeContentCss";

type Props = React.HTMLAttributes<HTMLDivElement>;

function HomeAboutMeContent(props: Props) {
  const theme = useTheme();
  const css = getHomeAboutMeContentCss(theme);

  return <div css={css} {...props} />;
}

export default HomeAboutMeContent;
