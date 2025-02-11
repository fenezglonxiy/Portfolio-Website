/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeSelectedWorksContentCss from "./getHomeSelectedWorksContentCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeSelectedWorksContent(props: Props) {
  const theme = useTheme();
  const css = getHomeSelectedWorksContentCss(theme);

  return <div css={css} {...props} />;
}

export default HomeSelectedWorksContent;
