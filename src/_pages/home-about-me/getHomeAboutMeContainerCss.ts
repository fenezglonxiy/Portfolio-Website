import { css, Theme } from "@mui/material";

const getHomeAboutMeContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(6)};
  max-width: 1080px;
  margin: 0 auto;
`;

export default getHomeAboutMeContainerCss;
