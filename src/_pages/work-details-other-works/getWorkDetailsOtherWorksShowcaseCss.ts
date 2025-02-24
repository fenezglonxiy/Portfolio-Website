import { css, Theme } from "@mui/material";

const getWorkDetailsOtherWorksShowcaseCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(6)};

  ${theme.breakpoints.down(theme.breakpoints.values.xl)} {
    grid-template-columns: 1fr;
  }
`;

export default getWorkDetailsOtherWorksShowcaseCss;
