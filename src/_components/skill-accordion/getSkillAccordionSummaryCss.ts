import { accordionSummaryClasses, css, Theme } from "@mui/material";

const getSkillAccordionSummaryCss = (theme: Theme) => css`
  gap: ${theme.spacing(5)};
  padding-inline: 0;

  & .${accordionSummaryClasses.content} {
    align-items: center;
    gap: ${theme.spacing(5)};
  }

  & .${accordionSummaryClasses.expandIconWrapper} {
    color: inherit;
  }
`;

export default getSkillAccordionSummaryCss;
