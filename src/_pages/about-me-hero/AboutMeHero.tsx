import { Button } from "@/_components/Button";
import {
  Hero,
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroProps,
  HeroSubheading,
  HeroTitle,
} from "@/_components/hero";
import { Typography } from "@/_components/Typography";
import { ArrowRight } from "@/_icons";

import Introduction from "./Introduction";
import WorkAttention from "./WorkAttention";
import AboutMeHeroActions from "./AboutMeHeroActions";

type Props = HeroProps;

function AboutMeHero(props: Props) {
  return (
    <Hero {...props}>
      <HeroContent>
        <HeroContainer>
          <HeroTitle>About me.</HeroTitle>

          <Introduction>
            <HeroHeading>
              Web Technical{" "}
              <Typography
                component="span"
                variant="inherit"
                color="neutral-450"
              >
                Craftsmanship
              </Typography>
            </HeroHeading>

            <WorkAttention>
              <HeroSubheading>
                I’m Trần Hoàng Đạt, a Web Developer in Vietnam, and I focus on
                building web applications that are easy to use, secure and
                highly scalable.
              </HeroSubheading>

              <AboutMeHeroActions>
                <Button
                  href="/contact"
                  size="large"
                  shape="pill"
                  icon={<ArrowRight size="md" />}
                  iconPosition="end"
                  fullWidth
                >
                  Let’s Talk
                </Button>
              </AboutMeHeroActions>
            </WorkAttention>
          </Introduction>
        </HeroContainer>
      </HeroContent>
    </Hero>
  );
}

export default AboutMeHero;
