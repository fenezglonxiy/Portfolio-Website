import {
  Hero,
  HeroHeading,
  HeroMedia,
  HeroProps,
  HeroTitle,
} from "@/_components/hero";

import WorkDetailsHeroContent from "./WorkDetailsHeroContainer";
import WorkDetailsHeroText from "./WorkDetailsHeroText";
import WorkDetailsHeroContainer from "./WorkDetailsHeroContainer";

export type WorkDetailsHeroProps = HeroProps;

function WorkDetailsHero(props: WorkDetailsHeroProps) {
  return (
    <Hero {...props}>
      <WorkDetailsHeroContent>
        <WorkDetailsHeroContainer>
          <WorkDetailsHeroText>
            <HeroTitle>Struktura.</HeroTitle>

            <HeroHeading variant="h3">
              Utilizing captivating imagery to enhance the overall user
              experience
            </HeroHeading>
          </WorkDetailsHeroText>

          <div>
            <HeroMedia component="img" src="image.png" />
          </div>
        </WorkDetailsHeroContainer>
      </WorkDetailsHeroContent>
    </Hero>
  );
}

export default WorkDetailsHero;
