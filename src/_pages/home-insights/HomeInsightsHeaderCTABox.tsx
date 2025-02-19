/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeInsightsHeaderCTABoxCss from "./getHomeInsightsHeaderCTABoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeInsightsHeaderCTABox(props: Props) {
  const theme = useTheme();
  const css = getHomeInsightsHeaderCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default HomeInsightsHeaderCTABox;
