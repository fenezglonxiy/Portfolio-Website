import {
  Hero,
  HeroContent,
  HeroHeading,
  HeroProps,
  HeroTitle,
} from "@/_components/hero";
import { Typography } from "@/_components/Typography";

export type WorksHeroProps = HeroProps;

function WorksHero(props: WorksHeroProps) {
  return (
    <Hero {...props}>
      <HeroContent>
        <HeroTitle>My works.</HeroTitle>

        <HeroHeading>
          Creating beneficial{" "}
          <Typography component="span" variant="inherit" color="neutral-450">
            software
          </Typography>
        </HeroHeading>
      </HeroContent>
    </Hero>
  );
}

export default WorksHero;
