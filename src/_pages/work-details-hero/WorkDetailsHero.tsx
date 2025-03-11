import { Hero, HeroMedia, HeroProps, HeroTitle } from "@/_components/hero";

import WorkDetailsHeroContent from "./WorkDetailsHeroContent";
import WorkDetailsHeroText from "./WorkDetailsHeroText";
import WorkDetailsHeroContainer from "./WorkDetailsHeroContainer";
import WorkDetailsHeroHeading from "./WorkDetailsHeroHeading";

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

            <WorkDetailsHeroHeading>{summary}</WorkDetailsHeroHeading>
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
