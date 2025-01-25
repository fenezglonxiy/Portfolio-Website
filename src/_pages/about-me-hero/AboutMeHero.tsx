/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Button } from "@/_components/Button";
import {
  Hero,
  HeroActions,
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroProps,
  HeroSubheading,
  HeroTitle,
} from "@/_components/hero";
import { Typography } from "@/_components/Typography";
import { ArrowRight } from "@/_icons";

import getAboutMeHeroCss from "./getAboutMeHeroCss";

export type AboutMeHeroProps = HeroProps;

function AboutMeHero(props: AboutMeHeroProps) {
  const theme = useTheme();
  const css = getAboutMeHeroCss(theme);

  return (
    <Hero {...props}>
      <HeroContent>
        <HeroContainer>
          <HeroTitle>About me.</HeroTitle>

          <div css={css.introduction}>
            <div>
              <HeroHeading>
                Web Technical{" "}
                <Typography
                  component="span"
                  variant="inherit"
                  color="neutral-450"
                >
                  Craftsmanship
                </Typography>
              </HeroHeading>
            </div>

            <div className="flow-spacer-y" css={css.workAttention}>
              <HeroSubheading>
                I’m Trần Hoàng Đạt, a Web Developer in Vietnam, and I focus on
                building web applications that are easy to use, secure and
                highly scalable.
              </HeroSubheading>

              <HeroActions css={css.actions}>
                <Button
                  href="/contact"
                  size="large"
                  shape="pill"
                  icon={<ArrowRight size="md" />}
                  iconPosition="end"
                >
                  Let’s Talk
                </Button>
              </HeroActions>
            </div>
          </div>
        </HeroContainer>
      </HeroContent>
    </Hero>
  );
}

export default AboutMeHero;
