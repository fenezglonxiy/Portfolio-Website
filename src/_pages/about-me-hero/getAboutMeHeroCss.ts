import { css, Theme } from "@mui/material";

const getAboutMeHeroIntroductionCss = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(8)};
`;

const getAboutMeHeroWorkAttentionCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(8)};
`;

const getAboutMeHeroActionsCss = () => css`
  justify-content: flex-end;
`;

const getAboutMeHeroCss = (theme: Theme) => ({
  introduction: getAboutMeHeroIntroductionCss(theme),
  workAttention: getAboutMeHeroWorkAttentionCss(theme),
  actions: getAboutMeHeroActionsCss(),
});

export default getAboutMeHeroCss;
