/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import {
  AccordionSummary,
  AccordionSummaryProps,
} from "@/_components/accordion";

import SkillAccordionExpandIcon from "./SkillAccordionExpandIcon";
import getSkillAccordionSummaryCss from "./getSkillAccordionSummaryCss";

export type SkillAccordionSummaryProps = AccordionSummaryProps;

function SkillAccordionSummary(props: SkillAccordionSummaryProps) {
  const theme = useTheme();
  const css = getSkillAccordionSummaryCss(theme);

  return (
    <AccordionSummary
      css={css}
      expandIcon={<SkillAccordionExpandIcon />}
      {...props}
    />
  );
}

export default SkillAccordionSummary;
