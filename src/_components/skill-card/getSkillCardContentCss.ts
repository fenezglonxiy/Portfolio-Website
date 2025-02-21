import { css, Theme } from "@mui/material";

const getSkillCardContentCss = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(27.5)};

  && {
    padding: 0;
  }

  ${theme.breakpoints.down(theme.breakpoints.values.lg)} {
    gap: ${theme.spacing(10)};
  }

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    flex-direction: column-reverse;
  }
`;

export default getSkillCardContentCss;
