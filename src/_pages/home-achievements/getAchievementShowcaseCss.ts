import { css, Theme } from "@mui/material";

const getAchievementShowcaseCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(8)};
`;

export default getAchievementShowcaseCss;
