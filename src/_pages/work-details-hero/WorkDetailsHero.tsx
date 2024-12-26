import {
  Hero,
  HeroHeading,
  HeroMedia,
  HeroProps,
  HeroTitle,
} from "@/_components/hero";

import WorkDetailsHeroContent from "./WorkDetailsHeroContent";
import WorkDetailsHeroText from "./WorkDetailsHeroText";

export type WorkDetailsHeroProps = HeroProps;

function WorkDetailsHero(props: WorkDetailsHeroProps) {
  return (
    <Hero {...props}>
      <WorkDetailsHeroContent>
        <WorkDetailsHeroText>
          <HeroTitle>Struktura.</HeroTitle>

          <HeroHeading variant="h3">
            Utilizing captivating imagery to enhance the overall user experience
          </HeroHeading>
        </WorkDetailsHeroText>

        <div>
          <HeroMedia component="img" src="image.png" />
        </div>
      </WorkDetailsHeroContent>
    </Hero>
  );
}

export default WorkDetailsHero;
