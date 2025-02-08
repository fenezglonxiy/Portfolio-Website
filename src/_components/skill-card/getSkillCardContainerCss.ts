import { css, Theme } from "@mui/material";

const getSkillCardContainerCss = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  padding: ${theme.spacing(6)};
`;

export default getSkillCardContainerCss;
