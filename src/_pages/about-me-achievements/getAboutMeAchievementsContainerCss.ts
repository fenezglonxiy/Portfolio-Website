import { css, Theme } from "@mui/material";

const getAboutMeAchievementsContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(20)};
  max-width: 1050px;
  margin: 0 auto;
`;

export default getAboutMeAchievementsContainerCss;
