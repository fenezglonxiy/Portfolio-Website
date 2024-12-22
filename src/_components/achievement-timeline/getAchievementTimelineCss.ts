import { css, Theme } from "@mui/material";

const getAchievementTimelineCss = (theme: Theme) => css`
  padding: 0;
  --flow-spacing-y: ${theme.spacing(8)};
`;

export default getAchievementTimelineCss;
