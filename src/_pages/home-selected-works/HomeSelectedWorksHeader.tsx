/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeSelectedWorksHeaderCss from "./getHomeSelectedWorksHeaderCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeSelectedWorksHeader(props: Props) {
  const theme = useTheme();
  const css = getHomeSelectedWorksHeaderCss(theme);

  return <div css={css} {...props} />;
}

export default HomeSelectedWorksHeader;
