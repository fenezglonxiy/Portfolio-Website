import { css, Theme } from "@mui/material";

const getSkillTitleCss = (theme: Theme) => css`
  position: absolute;
  ${theme.typography.h1};
  font-weight: ${theme.typography.fontWeightSemibold};
`;

export default getSkillTitleCss;
