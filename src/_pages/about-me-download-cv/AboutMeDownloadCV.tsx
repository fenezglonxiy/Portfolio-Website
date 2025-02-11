import { Button } from "@/_components/Button";
import { Typography } from "@/_components/Typography";
import { Download } from "@/_icons";

import AboutMeDownloadCVContent from "./AboutMeDownloadCVContent";

type Props = React.ComponentPropsWithoutRef<"section"> & {
  children?: undefined | null;
};

function AboutMeDownloadCV(props: Props) {
  return (
    <section {...props}>
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
