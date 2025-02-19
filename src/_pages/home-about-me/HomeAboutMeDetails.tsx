/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHomeAboutMeDetailsCss from "./getHomeAboutMeDetailsCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeAboutMeDetails(props: Props) {
  const theme = useTheme();
  const css = getHomeAboutMeDetailsCss(theme);

  return <div css={css} {...props} />;
}

export default HomeAboutMeDetails;
