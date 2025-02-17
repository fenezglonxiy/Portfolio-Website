/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { ArrowRight } from "@/_icons";
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

import getHomeHeroCss from "./getHomeHeroCss";

export type HomeHeroProps = HeroProps;

function HomeHero(props: HomeHeroProps) {
  const theme = useTheme();
  const css = getHomeHeroCss(theme);

  return (
    <Hero {...props}>
      <HeroContent>
        <HeroContainer>
          <HeroTitle>Hello! I’m Trần Hoàng Đạt.</HeroTitle>

          <HeroHeading>
            Developing{" "}
            <Typography component="span" variant="inherit" color="neutral-450">
              web apps
            </Typography>{" "}
            with an emphasis on{" "}
            <Typography component="span" variant="inherit" color="neutral-450">
              usability, security, and scalability
            </Typography>
          </HeroHeading>

          <div css={css.letsTalk}>
            <HeroActions>
              <Button
                href="/contact"
                variant="contained"
                color="primary"
                shape="pill"
                size="large"
                iconPosition="end"
                icon={<ArrowRight size="md" />}
              >
                Let’s talk
              </Button>
            </HeroActions>

            <div css={css.strengths}>
              <HeroSubheading>
                A developer harnessing the power of discipline, accuracy, and
                collaboration to deliver solutions.
              </HeroSubheading>
            </div>
          </div>
        </HeroContainer>
      </HeroContent>
    </Hero>
  );
}

export default HomeHero;
