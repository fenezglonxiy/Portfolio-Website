import { css, Theme } from "@mui/material";

const getInputCss = (theme: Theme) => css`
  ${theme.typography.body1Medium};
`;

export default getInputCss;
