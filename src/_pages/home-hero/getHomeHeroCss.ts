import { css, Theme } from "@mui/material";

const getHomeHeroLetsTalkCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${theme.spacing(10)};
`;

const getHomeHeroStrengthsCss = () => css`
  max-width: 520px;
`;

const getHomeHeroCss = (theme: Theme) => ({
  letsTalk: getHomeHeroLetsTalkCss(theme),
  strengths: getHomeHeroStrengthsCss(),
});

export default getHomeHeroCss;
