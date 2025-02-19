import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { ArrowRight } from "@/_icons";
import {
  Hero,
  HeroActions,
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroProps,
  HeroSubheading,
  HeroTitle,
} from "@/_components/hero";

import LetsTalk from "./LetsTalk";
import Strengths from "./Strengths";

type Props = HeroProps;

function HomeHero(props: Props) {
  return (
    <Hero {...props}>
      <HeroContent>
        <HeroContainer>
          <HeroTitle>Hello! I’m Trần Hoàng Đạt.</HeroTitle>

          <HeroHeading>
            Developing{" "}
            <Typography component="span" variant="inherit" color="neutral-450">
              web apps
            </Typography>{" "}
            with an emphasis on{" "}
            <Typography component="span" variant="inherit" color="neutral-450">
              usability, security, and scalability
            </Typography>
          </HeroHeading>

          <LetsTalk>
            <HeroActions>
              <Button
                href="/contact"
                variant="contained"
                color="primary"
                shape="pill"
                size="large"
                iconPosition="end"
                icon={<ArrowRight size="md" />}
                fullWidth
              >
                Let’s talk
              </Button>
            </HeroActions>

            <Strengths>
              <HeroSubheading>
                A developer harnessing the power of discipline, accuracy, and
                collaboration to deliver solutions.
              </HeroSubheading>
            </Strengths>
          </LetsTalk>
        </HeroContainer>
      </HeroContent>
    </Hero>
  );
}

export default HomeHero;
