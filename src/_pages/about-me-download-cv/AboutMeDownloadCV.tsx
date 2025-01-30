/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Button } from "@/_components/Button";
import { Typography } from "@/_components/Typography";
import { Download } from "@/_icons";

import getAboutMeDownloadCVCss from "./getAboutMeDownloadCVCss";
import AboutMeDownloadCVContent from "./AboutMeDownloadCVContent";

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
          href="/api/download-cv"
          variant="outlined"
          color="primary"
          size="large"
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
