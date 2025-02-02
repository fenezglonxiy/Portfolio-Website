import { css, Theme } from "@mui/material";

const getWorkSectionCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(2)};
`;

export default getWorkSectionCss;
