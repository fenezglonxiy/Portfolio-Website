import { css, Theme } from "@mui/material";

const getContactFormSectionContentCss = (theme: Theme) => css`
  padding: 0 ${theme.spacing(18)} ${theme.spacing(18)};

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding-inline: ${theme.spacing(10)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.sm)} {
    padding-inline: ${theme.spacing(5)};
  }
`;

export default getContactFormSectionContentCss;
