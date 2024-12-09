import { css, Theme } from "@mui/material";

const getHomeAboutMeConcentrationRootCss = (theme: Theme) => css`
  flex-basis: 65%;
  --flow-spacing-y: ${theme.spacing(8)};
`;

const getHomeAboutMeConcentrationCss = (theme: Theme) => ({
  root: getHomeAboutMeConcentrationRootCss(theme),
});

export default getHomeAboutMeConcentrationCss;
