import { HeroContainer, HeroContainerProps } from "@/_components/hero";

type Props = HeroContainerProps;

function WorkDetailsHeroContainer(props: Props) {
  return <HeroContainer verticalSpacing={6} {...props} />;
}

export default WorkDetailsHeroContainer;
