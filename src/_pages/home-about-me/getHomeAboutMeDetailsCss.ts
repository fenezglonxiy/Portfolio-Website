import { css } from "@mui/material";

const getHomeAboutMeDetailsRootCss = () => css`
  display: flex;
  justify-content: space-between;
`;

const getHomeAboutMeDetailsCss = () => ({
  root: getHomeAboutMeDetailsRootCss(),
});

export default getHomeAboutMeDetailsCss;
