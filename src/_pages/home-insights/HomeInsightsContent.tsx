/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeInsightsContentCss from "./getHomeInsightsContentCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeInsightsContent(props: Props) {
  const theme = useTheme();
  const css = getHomeInsightsContentCss(theme);

  return <div css={css} {...props} />;
}

export default HomeInsightsContent;
