import { css, Theme } from "@mui/material";

const getSkillTitleCss = (theme: Theme) => css`
  position: absolute;

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    ${theme.typography.h3};
    font-weight: ${theme.typography.fontWeightSemibold};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.lg)} {
    ${theme.typography.h4};
    font-weight: ${theme.typography.fontWeightSemibold};
  }
`;

export default getSkillTitleCss;
