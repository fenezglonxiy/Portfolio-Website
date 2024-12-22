/** @jsxImportSource @emotion/react */

"use client";

import { Typography } from "@/_components/Typography";
import { useTheme } from "@mui/material";
import React from "react";
import getAboutMeDownloadCVCss from "./getAboutMeDownloadCVCss";
import AboutMeDownloadCVContent from "./AboutMeDownloadCVContent";
import { Button } from "@/_components/Button";
import { Download } from "@/_icons";

export type AboutMeDownloadCVProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: undefined | null;
};

function AboutMeDownloadCV(props: AboutMeDownloadCVProps) {
  const theme = useTheme();
  const css = getAboutMeDownloadCVCss(theme);

  return (
    <section css={css} {...props}>
      <AboutMeDownloadCVContent>
        <Typography variant="h2">Want to know more about me?</Typography>

        <Button
          variant="outlined"
          color="primary"
          size="md"
          icon={<Download size="lg" />}
          iconPosition="start"
        >
          Download my CV
        </Button>
      </AboutMeDownloadCVContent>
    </section>
  );
}

export default AboutMeDownloadCV;
