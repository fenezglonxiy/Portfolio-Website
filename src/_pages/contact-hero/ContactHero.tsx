import {
  Hero,
  HeroContent,
  HeroHeading,
  HeroProps,
  HeroSubheading,
  HeroTitle,
} from "@/_components/hero";
import { Typography } from "@/_components/Typography";

export type ContactHeroProps = HeroProps;

function ContactHero(props: ContactHeroProps) {
  return (
    <Hero {...props}>
      <HeroContent verticalSpacing={6}>
        <HeroTitle>Contact me.</HeroTitle>

        <HeroHeading transform="uppercase">
          Reach out,{" "}
          <Typography
            component="span"
            variant="inherit"
            transform="inherit"
            color="neutral-450"
          >
            Let's talk
          </Typography>
        </HeroHeading>

        <HeroSubheading transform="uppercase">
          Have a project or idea in mind? I’m ready to help make it a reality.
           Reach out today, and let’s create something amazing together.
        </HeroSubheading>
      </HeroContent>
    </Hero>
  );
}

export default ContactHero;
