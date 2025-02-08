import { css, Theme } from "@mui/material";

const getSkillShowcaseContentCss = (theme: Theme) => css`
  & .about-me-skill-item:first-of-type .about-me-skill-card {
    background-color: ${theme.palette.indigo[400]};
  }

  & .about-me-skill-item:nth-of-type(2) .about-me-skill-card {
    background-color: ${theme.palette.neutral[300]};
  }

  & .about-me-skill-item:nth-of-type(3) .about-me-skill-card {
    background-color: ${theme.palette.slate[900]};
    color: white;
  }
`;

export default getSkillShowcaseContentCss;
