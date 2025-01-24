import { css, Theme } from "@mui/material";

const getNotFoundHeroTextCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(5)};
  flex-grow: 1;
`;

export default getNotFoundHeroTextCss;
