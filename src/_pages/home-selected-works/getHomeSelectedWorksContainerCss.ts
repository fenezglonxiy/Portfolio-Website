import { css, Theme } from "@mui/material";

const getHomeSelectedWorksContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(12)};
  max-width: 1050px;
  margin-inline: auto;
`;

export default getHomeSelectedWorksContainerCss;
