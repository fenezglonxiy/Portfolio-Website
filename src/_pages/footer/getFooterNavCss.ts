import { css, Theme } from "@mui/material";

const getFooterNavCss = (theme: Theme) => css`
  padding: ${theme.spacing(20)};
  display: flex;
  gap: ${theme.spacing(20)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    padding: ${theme.spacing(10)};
    flex-direction: column;
    gap: ${theme.spacing(12)};
  }

  ${theme.breakpoints.up(theme.breakpoints.values.xl)} {
    justify-content: flex-end;
  }
`;

export default getFooterNavCss;
