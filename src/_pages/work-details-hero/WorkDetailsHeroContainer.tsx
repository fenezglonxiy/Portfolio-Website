import { HeroContainer, HeroContainerProps } from "@/_components/hero";

export type WorkDetailsHeroContainerProps = HeroContainerProps;

function WorkDetailsHeroContainer(props: WorkDetailsHeroContainerProps) {
  return <HeroContainer verticalSpacing={6} {...props} />;
}

export default WorkDetailsHeroContainer;
