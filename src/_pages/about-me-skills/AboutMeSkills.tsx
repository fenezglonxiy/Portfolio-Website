"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@mui/material";

import {
  SkillCard,
  SkillCardContainer,
  SkillCardContent,
  SkillCardMedia,
  SkillDescription,
  SkillDescriptionBox,
  skillDescriptionClasses,
  SkillTitle,
  skillTitleClasses,
} from "@/_components/skill-card";
import { Button } from "@/_components/Button";
import useWindowSize from "@/_hooks/useWindowSize";
import { ArrowRight } from "@/_icons";
import {
  LinesAnimation,
  Slide,
  TitleAnimation,
  WordsAnimation,
} from "@/_components/animation";
import useIsomorphicLayoutEffect from "@/_hooks/useIsomorphicLayoutEffect";

import AboutMeSkillsContent from "./AboutMeSkillsContent";
import SkillShowcaseHeader from "./SkillShowcaseHeader";
import SkillShowcaseContent from "./SkillShowcaseContent";
import AboutMeSkillsCTABox from "./AboutMeSkillsCTABox";
import SkillShowcaseTitle from "./SkillShowcaseTitle";
import SkillShowcase from "./SkillShowcase";
import SkillList from "./SkillList";
import SkillListItem from "./SkillListItem";
import skillListItemClasses from "./skillListItemClasses";
import skillShowcaseClasses from "./skillShowcaseClasses";
import skillShowcaseTitleClasses from "./skillShowcaseTitleClasses";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type Props = React.ComponentPropsWithoutRef<"section"> & {
  children?: undefined | null;
};

const skills = [
  {
    mediaSrc: "/image.png",
    title: "Nextjs Development",
    description:
      "I have been working with ReactJS since 2021. With ReactJS or NextJS, I have built multiple applications of different sizes and in various areas: a Personal Website, a Task Management Web Application, an English Tutor Web Application, etc.",
  },
  {
    mediaSrc: "/image.png",
    title: "Angular Development",
    description:
      "I have around one year of experience working with Angular. During that time, I focused on the knowledge represented by the Angular official documentation and built a Real Estate Web Application. ",
  },
  {
    mediaSrc: "/image.png",
    title: "Backend Development",
    description:
      "For backend development, I know NodeJS, Spring Webflux, and Golang. Although I have a little practical experience in backend development, I have been cultivating knowledge of aspects besides technologies of backend development: OOP, OOP design patterns, SQL database, and Microservices.",
  },
];

function AboutMeSkills(props: Props) {
  const contentRef = React.useRef(null);
  const { width } = useWindowSize();

  // The entering of the skill showcase triggers the animation.
  const animTrigger = `.${skillShowcaseClasses.root}`;

  // The skill showcase is pinned and the skill items start scrolling when
  // the top of the skill showcase hits 82px, which is the height of the
  // header, below the viewport/scroller.
  const animStart = "top top+=82px";

  const skillItems = React.useRef<HTMLElement[]>();

  const skillTitle = React.useRef<HTMLElement>();

  const scrollHeight = () => {
    if (
      !skillItems ||
      !skillItems.current ||
      !skillTitle ||
      !skillTitle.current
    ) {
      return 0;
    }

    const computedStyle = window.getComputedStyle(skillTitle.current);
    const lineHeight = parseInt(computedStyle.lineHeight);

    // 48 = padding-block
    const collapsedHeight = lineHeight + 48;

    return skillItems.current[0].clientHeight - collapsedHeight;
  };

  const skillShowcasePinEnd = () => {
    if (!skillItems || !skillItems.current) {
      return 0;
    }

    return `+=${scrollHeight() * (skillItems.current.length - 1)}`;
  };

  const skillItemScrollDest = (index: number) => -scrollHeight() * index;

  const skillItemScrollEnd = (index: number) => `+=${scrollHeight() * index}`;

  const theme = useTheme();

  const pinShowcaseScrollTriggerId = "about-me-skills-showcase-st";

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(
        `.${skillListItemClasses.root}`
      );
      skillItems.current = items;

      const skillTitles = gsap.utils.toArray<HTMLElement>(
        `.${skillTitleClasses.root}`
      );
      skillTitle.current = skillTitles[0];

      return () => {
        items.forEach((_, idx) => {
          ScrollTrigger.getById(`${skillListItemClasses.root}-${idx}`)?.kill();
        });
      };
    },
    { scope: contentRef }
  );

  useIsomorphicLayoutEffect(() => {
    if (!skillItems || !skillItems.current || !width) {
      return;
    }

    ScrollTrigger.getById(pinShowcaseScrollTriggerId)?.kill();
    skillItems.current.forEach((_, idx) => {
      ScrollTrigger.getById(`${skillListItemClasses.root}-${idx}`)?.kill();
    });

    if (width < theme.breakpoints.values.lg) {
      return;
    }

    ScrollTrigger.create({
      id: pinShowcaseScrollTriggerId,
      trigger: animTrigger,
      start: animStart,
      end: () => skillShowcasePinEnd(),
      pin: true,
      pinSpacing: false,
    });

    skillItems.current.forEach((item, idx) => {
      ScrollTrigger.create({
        id: `${skillListItemClasses.root}-${idx}`,
        animation: gsap.to(item, {
          y: () => skillItemScrollDest(idx),
          ease: "none",
        }),
        start: animStart,
        trigger: animTrigger,
        end: () => skillItemScrollEnd(idx),
        scrub: true,
      });
    });
  }, [width, skillItems, skillItems.current]);

  return (
    <section {...props}>
      <AboutMeSkillsContent ref={contentRef}>
        <SkillShowcase>
          <SkillShowcaseHeader>
            <WordsAnimation textBoxClassName={skillShowcaseTitleClasses.root}>
              <SkillShowcaseTitle>I can help you with</SkillShowcaseTitle>
            </WordsAnimation>
          </SkillShowcaseHeader>

          <SkillShowcaseContent>
            <SkillList>
              {skills.map((skill, idx) => (
                <SkillListItem key={idx}>
                  <SkillCard>
                    <SkillCardContainer>
                      <TitleAnimation textBoxClassName={skillTitleClasses.root}>
                        <SkillTitle>{skill.title}</SkillTitle>
                      </TitleAnimation>

                      <SkillCardContent>
                        <SkillDescriptionBox>
                          <LinesAnimation
                            textBoxClassName={skillDescriptionClasses.root}
                            delay={0.2}
                          >
                            <SkillDescription>
                              {skill.description}
                            </SkillDescription>
                          </LinesAnimation>
                        </SkillDescriptionBox>

                        <Slide direction="left">
                          <SkillCardMedia
                            component="img"
                            src={skill.mediaSrc}
                          />
                        </Slide>
                      </SkillCardContent>
                    </SkillCardContainer>
                  </SkillCard>
                </SkillListItem>
              ))}
            </SkillList>
          </SkillShowcaseContent>
        </SkillShowcase>

        <AboutMeSkillsCTABox>
          <Button
            href="/works"
            shape="pill"
            icon={<ArrowRight />}
            iconPosition="end"
          >
            See my work
          </Button>
        </AboutMeSkillsCTABox>
      </AboutMeSkillsContent>
    </section>
  );
}

export default AboutMeSkills;
