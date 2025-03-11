/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeInsightsHeaderCss from "./getHomeInsightsHeaderCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeInsightsHeader(props: Props) {
  const theme = useTheme();
  const css = getHomeInsightsHeaderCss(theme);

  return <div css={css} {...props} />;
}

export default HomeInsightsHeader;
