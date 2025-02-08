import { css, Theme } from "@mui/material";

const getSkillShowcaseHeaderCss = (theme: Theme) => css`
  position: relative;
  padding: 0 ${theme.spacing(8)};
`;

export default getSkillShowcaseHeaderCss;
