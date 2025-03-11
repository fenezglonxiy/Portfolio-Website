import { css, Theme } from "@mui/material";

const getStrengthsCss = (theme: Theme) => css`
  ${theme.breakpoints.up(theme.breakpoints.values.md)} {
    justify-self: flex-end;
    max-width: 520px;
  }
`;

export default getStrengthsCss;
