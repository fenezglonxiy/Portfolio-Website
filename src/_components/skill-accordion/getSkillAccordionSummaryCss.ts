import { accordionSummaryClasses, css, Theme } from "@mui/material";

const getSkillAccordionSummaryCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${theme.spacing(5)};
  padding-inline: 0;

  & .${accordionSummaryClasses.content} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: ${theme.spacing(5)};
  }

  & .${accordionSummaryClasses.expandIconWrapper} {
    color: inherit;
  }
`;

export default getSkillAccordionSummaryCss;
