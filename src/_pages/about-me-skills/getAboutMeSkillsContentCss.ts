import { css, Theme } from "@mui/material";

const getAboutMeSkillsContentRootCss = (theme: Theme) => css`
  padding: ${theme.spacing(10)} ${theme.spacing(18)} ${theme.spacing(35)};
`;

const getAboutMeSkillsContentContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(12)};
  max-width: 1050px;
  margin: 0 auto;
`;

const getAboutMeSkillsContentCss = (theme: Theme) => ({
  root: getAboutMeSkillsContentRootCss(theme),
  container: getAboutMeSkillsContentContainerCss(theme),
});

export default getAboutMeSkillsContentCss;
