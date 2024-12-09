import { css, Theme } from "@mui/material";

const getHomeAboutMeSkillListCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(6)};
`;

const getHomeAboutMeSkillsCss = (theme: Theme) => ({
  skillList: getHomeAboutMeSkillListCss(theme),
});

export default getHomeAboutMeSkillsCss;
