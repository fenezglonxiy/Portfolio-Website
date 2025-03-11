/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";

import getHomeAboutMeSummaryCss from "./getHomeAboutMeSummaryCss";

type Props = Omit<React.ComponentPropsWithoutRef<"h1">, "color">;

function HomeAboutMeSummary(props: Props) {
  const theme = useTheme();
  const css = getHomeAboutMeSummaryCss(theme);

  return (
    <Typography
      variant="h1"
      color="neutral-900"
      fontWeight="semi-bold"
      css={css}
      {...props}
    />
  );
}

export default HomeAboutMeSummary;
