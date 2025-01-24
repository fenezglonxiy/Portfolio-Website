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

export type InsightsHeroProps = Omit<HeroProps, "children">;

function InsightsHero(props: InsightsHeroProps) {
  return (
    <Hero {...props}>
      <HeroContent>
        <HeroContainer textAlign="center">
          <HeroTitle>Insights</HeroTitle>

          <HeroHeading>
            A collection of my{" "}
            <Typography component="span" variant="inherit" color="neutral-450">
              insights
            </Typography>
          </HeroHeading>

          <HeroSubheading>...</HeroSubheading>
        </HeroContainer>
      </HeroContent>
    </Hero>
  );
}

export default InsightsHero;
