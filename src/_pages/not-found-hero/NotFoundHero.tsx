import {
  Hero,
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroProps,
  HeroSubheading,
} from "@/_components/hero";

import NotFoundHeroLayout from "./NotFoundHeroLayout";
import NotFoundHeroLayoutContent from "./NotFoundHeroLayoutContent";
import NotFoundHeroMedia from "./NotFoundHeroMedia";
import NotFoundHeroText from "./NotFoundHeroText";
import NotFoundHeroCTABox from "./NotFoundHeroCTABox";
import { Button } from "@/_components/Button";

export type NotFoundHeroProps = Omit<HeroProps, "children">;

function NotFoundHero(props: NotFoundHeroProps) {
  return (
    <Hero>
      <HeroContent>
        <HeroContainer>
          <NotFoundHeroLayout>
            <NotFoundHeroLayoutContent>
              <NotFoundHeroMedia
                component="img"
                srcSet="/404-640w.webp 640w, /404-1080w.webp 1080w"
                src="/404-1080w.webp"
              />

              <NotFoundHeroText>
                <HeroHeading>Oops!</HeroHeading>

                <HeroSubheading>
                  We couldn't find the page you were looking for
                </HeroSubheading>

                <NotFoundHeroCTABox>
                  <Button
                    href="/"
                    shape="pill"
                    iconPosition="start"
                    icon={
                      <span>
                        <i className="fa-regular fa-arrow-left"></i>
                      </span>
                    }
                  >
                    Go home
                  </Button>
                </NotFoundHeroCTABox>
              </NotFoundHeroText>
            </NotFoundHeroLayoutContent>
          </NotFoundHeroLayout>
        </HeroContainer>
      </HeroContent>
    </Hero>
  );
}

export default NotFoundHero;
