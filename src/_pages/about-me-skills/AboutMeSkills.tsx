"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SkillCard,
  SkillCardContainer,
  SkillCardContent,
  SkillCardMedia,
  SkillDescription,
  SkillTitle,
} from "@/_components/skill-card";
import { Button } from "@/_components/Button";

import AboutMeSkillsContent from "./AboutMeSkillsContent";
import SkillShowcaseHeader from "./SkillShowcaseHeader";
import SkillShowcaseContent from "./SkillShowcaseContent";
import AboutMeSkillsCTA from "./AboutMeSkillsCTA";
import { ArrowRight } from "@/_icons";
import SkillShowcaseTitle from "./SkillShowcaseTitle";
import SkillShowcase from "./SkillShowcase";
import SkillList from "./SkillList";
import SkillItem from "./SkillItem";

export type AboutMeSkillsProps = React.ComponentPropsWithoutRef<"section"> & {
  children?: undefined | null;
};

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    mediaSrc: "/image.png",
    title: "Nextjs development",
    description:
      "I have been working with ReactJS since 2021. With ReactJS or NextJS, I have built multiple applications of different sizes and in various areas: a Personal Website, a Task Management Web Application, an English Tutor Web Application, etc.",
  },
  {
    mediaSrc: "/image.png",
    title: "Angular development",
    description:
      "I have around one year of experience working with Angular. During that time, I focused on the knowledge represented by the Angular official documentation and built a Real Estate Web Application. ",
  },
  {
    mediaSrc: "/image.png",
    title: "Backend development",
    description:
      "For backend development, I know NodeJS, Spring Webflux, and Golang. Although I have a little practical experience in backend development, I have been cultivating knowledge of aspects besides technologies of backend development: OOP, OOP design patterns, SQL database, and Microservices.",
  },
];

function AboutMeSkills(props: AboutMeSkillsProps) {
  const content = React.useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".about-me-skill-item");

      ScrollTrigger.create({
        trigger: ".about-me-skill-showcase",
        start: "top 6%",
        end: `+=${207 * (items.length - 1)}`,
        pin: true,
        pinSpacing: false,
      });

      items.forEach((item, idx) => {
        gsap.to(item, {
          y: `-${207 * idx}px`,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-me-skill-showcase",
            start: "top 6%",
            end: `+=${207 * idx}`,
            scrub: true,
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: content }
  );

  return (
    <section {...props}>
      <AboutMeSkillsContent ref={content}>
        <SkillShowcase className="about-me-skill-showcase">
          <SkillShowcaseHeader>
            <SkillShowcaseTitle>I can help you with</SkillShowcaseTitle>
          </SkillShowcaseHeader>

          <SkillShowcaseContent>
            <SkillList>
              {skills.map((skill, idx) => (
                <SkillItem className="about-me-skill-item" key={idx}>
                  <SkillCard className="about-me-skill-card">
                    <SkillCardContainer>
                      <SkillTitle>{skill.title}</SkillTitle>

                      <SkillCardContent>
                        <SkillDescription>{skill.description}</SkillDescription>

                        <SkillCardMedia component="img" src={skill.mediaSrc} />
                      </SkillCardContent>
                    </SkillCardContainer>
                  </SkillCard>
                </SkillItem>
              ))}
            </SkillList>
          </SkillShowcaseContent>
        </SkillShowcase>

        <AboutMeSkillsCTA className="about-me-skills-cta">
          <Button shape="pill" icon={<ArrowRight />} iconPosition="end">
            See my work
          </Button>
        </AboutMeSkillsCTA>
      </AboutMeSkillsContent>
    </section>
  );
}

export default AboutMeSkills;
