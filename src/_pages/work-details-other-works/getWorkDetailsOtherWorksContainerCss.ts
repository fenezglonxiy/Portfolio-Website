import { css, Theme } from "@mui/material";

const getWorkDetailsOtherWorksContainerCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(12)};
  max-width: 1050px;
  margin: 0 auto;
`;

export default getWorkDetailsOtherWorksContainerCss;
