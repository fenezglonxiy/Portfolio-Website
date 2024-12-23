/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getAboutMeSkillsShowcaseCss from "./getAboutMeSkillsShowcaseCss";
import clsx from "clsx";
import {
  ProjectThumbnail,
  ProjectThumbnailContainer,
  SkillAccordion,
  SkillAccordionDetails,
  SkillAccordionSummary,
  SkillDescription,
  SkillIcon,
  SkillTitle,
} from "@/_components/skill-accordion";

export type AboutMeSkillsShowcaseProps =
  React.ComponentPropsWithoutRef<"div"> & {
    children?: undefined | null;
  };

function AboutMeSkillsShowcase(props: AboutMeSkillsShowcaseProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getAboutMeSkillsShowcaseCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest}>
      <SkillAccordion>
        <SkillAccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <SkillIcon size="md" xLinkHref="nextjs.svg#nextjs" />
          <SkillTitle>Skill title</SkillTitle>
          <SkillDescription>Skill description</SkillDescription>
        </SkillAccordionSummary>
        <SkillAccordionDetails>
          <ProjectThumbnailContainer>
            <ProjectThumbnail src="image1.png" />
            <ProjectThumbnail src="image2.png" />
          </ProjectThumbnailContainer>
        </SkillAccordionDetails>
      </SkillAccordion>
      <SkillAccordion>
        <SkillAccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <SkillIcon size="md" xLinkHref="nextjs.svg#nextjs" />
          <SkillTitle>Skill title</SkillTitle>
          <SkillDescription>Skill description</SkillDescription>
        </SkillAccordionSummary>
        <SkillAccordionDetails>
          <ProjectThumbnailContainer>
            <ProjectThumbnail src="image1.png" />
            <ProjectThumbnail src="image2.png" />
          </ProjectThumbnailContainer>
        </SkillAccordionDetails>
      </SkillAccordion>
      <SkillAccordion>
        <SkillAccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <SkillIcon size="md" xLinkHref="nextjs.svg#nextjs" />
          <SkillTitle>Skill title</SkillTitle>
          <SkillDescription>Skill description</SkillDescription>
        </SkillAccordionSummary>
        <SkillAccordionDetails>
          <ProjectThumbnailContainer>
            <ProjectThumbnail src="image1.png" />
            <ProjectThumbnail src="image2.png" />
          </ProjectThumbnailContainer>
        </SkillAccordionDetails>
      </SkillAccordion>
    </div>
  );
}

export default AboutMeSkillsShowcase;
