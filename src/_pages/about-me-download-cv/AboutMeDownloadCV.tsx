import { Button } from "@/_components/Button";
import { Typography } from "@/_components/Typography";
import { Download } from "@/_icons";

import AboutMeDownloadCVContent from "./AboutMeDownloadCVContent";
import AboutMeDownloadCVHeader from "./AboutMeDownloadCVHeader";

type Props = React.ComponentPropsWithoutRef<"section"> & {
  children?: undefined | null;
};

function AboutMeDownloadCV(props: Props) {
  return (
    <section id="download-cv" {...props}>
      <AboutMeDownloadCVContent>
        <AboutMeDownloadCVHeader>
          <Typography component="h2" variant="inherit">
            Want to know more about me?
          </Typography>
        </AboutMeDownloadCVHeader>

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
