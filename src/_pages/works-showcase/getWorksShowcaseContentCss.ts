import { css, Theme } from "@mui/material";

const getWorksShowcaseContentCss = (theme: Theme) => css`
  padding: ${theme.spacing(30)} ${theme.spacing(25)};
  --flow-spacing-y: ${theme.spacing(14)};
`;

export default getWorksShowcaseContentCss;
