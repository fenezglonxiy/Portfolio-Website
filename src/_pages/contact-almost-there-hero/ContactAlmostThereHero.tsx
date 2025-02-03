import {
  Hero,
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroSubheading,
} from "@/_components/hero";

export type ContactAlmostThereHeroProps = React.ComponentPropsWithoutRef<"div">;

function ContactAlmostThereHero(props: ContactAlmostThereHeroProps) {
  return (
    <Hero {...props}>
      <HeroContent>
        <HeroContainer verticalSpacing={6}>
          <HeroHeading>Awesome, we&apos;re almost there</HeroHeading>

          <HeroSubheading>
            Thank you for sharing your ideas about your next project with me.
          </HeroSubheading>

          <HeroSubheading>
            I will get back to you as soon as possible 24 hours from now on. I
            hope we can collaborate well till the end and make your ideas become
            reality.
          </HeroSubheading>
        </HeroContainer>
      </HeroContent>
    </Hero>
  );
}

export default ContactAlmostThereHero;
