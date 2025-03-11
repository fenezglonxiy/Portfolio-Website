import { css, Theme } from "@mui/material";

const getContactFormCTABoxCss = (theme: Theme) => css`
  ${theme.breakpoints.up(theme.breakpoints.values.md)} {
    align-self: flex-end;
  }
`;

export default getContactFormCTABoxCss;
