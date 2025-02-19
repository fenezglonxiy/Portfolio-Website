import { css, Theme } from "@mui/material";

const getHomeAboutMeSummaryCss = (theme: Theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    ${theme.typography.h3};
    font-weight: ${theme.typography.fontWeightSemibold};
  }
`;

export default getHomeAboutMeSummaryCss;
