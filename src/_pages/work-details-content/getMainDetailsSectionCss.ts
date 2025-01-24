import { css, Theme } from "@mui/material";

const getMainDetailsSectionCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(6)};
`;

export default getMainDetailsSectionCss;
