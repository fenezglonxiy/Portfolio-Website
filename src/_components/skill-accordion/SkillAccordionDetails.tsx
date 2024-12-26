/** @jsxImportSource @emotion/react */

"use client";

import {
  AccordionDetails,
  AccordionDetailsProps,
} from "@/_components/accordion";

import getSkillAccordionDetailsCss from "./getSkillAccordionDetailsCss";

export type SkillAccordionDetailsProps = AccordionDetailsProps;

function SkillAccordionDetails(props: SkillAccordionDetailsProps) {
  const css = getSkillAccordionDetailsCss();

  return <AccordionDetails css={css} {...props} />;
}

export default SkillAccordionDetails;
