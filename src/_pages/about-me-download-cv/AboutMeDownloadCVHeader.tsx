/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";

import getAboutMeDownloadCVHeaderCss from "./getAboutMeDownloadCVHeaderCss";

type Props = Omit<React.ComponentPropsWithoutRef<"div">, "color">;

function AboutMeDownloadCVHeader(props: Props) {
  const theme = useTheme();
  const css = getAboutMeDownloadCVHeaderCss(theme);

  return (
    <Typography
      component="div"
      variant="h2"
      color="neutral-900"
      css={css}
      {...props}
    />
  );
}

export default AboutMeDownloadCVHeader;
