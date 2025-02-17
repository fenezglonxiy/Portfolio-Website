/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeAboutMeCTABoxCss from "./getHomeAboutMeCTABoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeAboutMeCTABox(props: Props) {
  const theme = useTheme();
  const css = getHomeAboutMeCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default HomeAboutMeCTABox;
