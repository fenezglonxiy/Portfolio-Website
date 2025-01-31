/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import clsx from "clsx";

import {
  ProjectThumbnail,
  ProjectThumbnailContainer,
  SkillAccordion,
  SkillAccordionDetails,
  SkillAccordionSummary,
  SkillDescription,
  SkillTitle,
} from "@/_components/skill-accordion";

import getAboutMeSkillsShowcaseCss from "./getAboutMeSkillsShowcaseCss";

export type AboutMeSkillsShowcaseProps =
  React.ComponentPropsWithoutRef<"div"> & {
    children?: undefined | null;
  };

const skillAccordions = [
  {
    "aria-controls": "nextjs-skill-panel-content",
    id: "nextjs-skill-panel-header",
    title: "Nextjs development",
    description:
      "I have been working with ReactJS since 2021. With ReactJS or NextJS, I have built multiple applications of different sizes and in various areas: a Personal Website, a Task Management Web Application, an English Tutor Web Application, etc.",
  },
  {
    "aria-controls": "angular-skill-panel-content",
    id: "angular-skill-panel-header",
    title: "Angular development",
    description:
      "I have around one year of experience working with Angular. During that time, I focused on the knowledge represented by the Angular official documentation and built a Real Estate Web Application. ",
  },
  {
    "aria-controls": "backend-development-skill-panel-content",
    id: "backend-development-skill-panel-header",
    title: "Backend development",
    description:
      "For backend development, I know NodeJS, Spring Webflux, and Golang. Although I have a little practical experience in backend development, I have been cultivating knowledge of aspects besides technologies of backend development: OOP, OOP design patterns, SQL database, and Microservices.",
  },
];

function AboutMeSkillsShowcase(props: AboutMeSkillsShowcaseProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getAboutMeSkillsShowcaseCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest}>
      {skillAccordions.map((skill, idx) => (
        <SkillAccordion key={idx}>
          <SkillAccordionSummary
            aria-controls={skill["aria-controls"]}
            id={skill.id}
          >
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillAccordionSummary>

          <SkillAccordionDetails>
            <ProjectThumbnailContainer>
              <ProjectThumbnail src="image1.png" />
              <ProjectThumbnail src="image2.png" />
            </ProjectThumbnailContainer>
          </SkillAccordionDetails>
        </SkillAccordion>
      ))}
    </div>
  );
}

export default AboutMeSkillsShowcase;
