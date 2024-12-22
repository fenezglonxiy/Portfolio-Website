import { css, Theme } from "@mui/material";

const getHomeAboutMeBusinessAttentionRootCss = (theme: Theme) => css`
  flex-basis: 65%;
  --flow-spacing-y: ${theme.spacing(8)};
`;

const getHomeAboutMeBusinessAttentionCss = (theme: Theme) => ({
  root: getHomeAboutMeBusinessAttentionRootCss(theme),
});

export default getHomeAboutMeBusinessAttentionCss;
