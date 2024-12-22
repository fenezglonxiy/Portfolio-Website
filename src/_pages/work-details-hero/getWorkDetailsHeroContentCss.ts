import { css, Theme } from "@mui/material";

const getWorkDetailsHeroContentCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(6)};
  padding-bottom: 0;
`;

export default getWorkDetailsHeroContentCss;
