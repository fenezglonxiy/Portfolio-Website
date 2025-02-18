/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeSelectedWorksCTABoxCss from "./getHomeSelectedWorksCTABoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeSelectedWorksCTABox(props: Props) {
  const theme = useTheme();
  const css = getHomeSelectedWorksCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default HomeSelectedWorksCTABox;
