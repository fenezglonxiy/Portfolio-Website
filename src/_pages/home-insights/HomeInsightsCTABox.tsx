/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeInsightsCTABoxCss from "./getHomeInsightsCTABoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeInsightsCTABox(props: Props) {
  const theme = useTheme();
  const css = getHomeInsightsCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default HomeInsightsCTABox;
