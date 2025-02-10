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

export type WorkDetailsHeroProps = HeroProps & {
  /**
   * The title of the work.
   */
  title: string;

  /**
   * The summary of the work.
   */
  summary: string;

  /**
   * The source of the work's media.
   */
  mediaSrc: string;
};

function WorkDetailsHero(props: WorkDetailsHeroProps) {
  const { title, summary, mediaSrc, ...rest } = props;

  return (
    <Hero {...rest}>
      <WorkDetailsHeroContent>
        <WorkDetailsHeroContainer>
          <WorkDetailsHeroText>
            <HeroTitle>{title}</HeroTitle>

            <HeroHeading variant="h3">{summary}</HeroHeading>
          </WorkDetailsHeroText>

          <div>
            <HeroMedia component="img" src={mediaSrc} />
          </div>
        </WorkDetailsHeroContainer>
      </WorkDetailsHeroContent>
    </Hero>
  );
}

export default WorkDetailsHero;
