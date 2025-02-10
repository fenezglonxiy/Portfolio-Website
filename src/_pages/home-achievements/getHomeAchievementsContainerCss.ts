import { css, Theme } from "@mui/material";

const getHomeAchievementsContainerCss = (theme: Theme) => css`
  max-width: 1050px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(8)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    grid-template-columns: repeat(1, 1fr);
    gap: ${theme.spacing(20)};
  }
`;

export default getHomeAchievementsContainerCss;
