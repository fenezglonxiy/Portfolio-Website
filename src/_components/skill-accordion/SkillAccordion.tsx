/** @jsxImportSource @emotion/react */

"use client";

import { Accordion, AccordionProps } from "../accordion";
import getSkillAccordionCss from "./getSkillAccordionCss";

export type SkillAccordionProps = AccordionProps;

function SkillAccordion(props: SkillAccordionProps) {
  const css = getSkillAccordionCss();

  return <Accordion css={css} elevation={0} defaultExpanded {...props} />;
}

export default SkillAccordion;
