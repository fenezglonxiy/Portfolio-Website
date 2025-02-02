import { css, Theme } from "@mui/material";

const getWorkShowcaseCardContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(11)} 0 0 0;
  --flow-spacing-y: ${theme.spacing(6)};
`;

export default getWorkShowcaseCardContentCss;
