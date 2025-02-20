import { css, Theme } from "@mui/material";

const getContactFormCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(10)};
  display: flex;
  flex-direction: column;

  ${theme.breakpoints.up(theme.breakpoints.values.md)} {
    max-width: 656px;
    margin: 0 auto;
  }
`;

export default getContactFormCss;
