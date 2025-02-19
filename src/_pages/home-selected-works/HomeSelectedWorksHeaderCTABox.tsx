/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeSelectedWorksHeaderCTABoxCss from "./getHomeSelectedWorksHeaderCTABoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeSelectedWorksHeaderCTABox(props: Props) {
  const theme = useTheme();
  const css = getHomeSelectedWorksHeaderCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default HomeSelectedWorksHeaderCTABox;
