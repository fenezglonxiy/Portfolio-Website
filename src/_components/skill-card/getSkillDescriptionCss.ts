import { css, Theme } from "@mui/material";

const getSkillDescriptionCss = (theme: Theme) => css`
  flex: 1;
  align-self: flex-end;

  ${theme.breakpoints.between(
    theme.breakpoints.values.md,
    theme.breakpoints.values.lg
  )} {
    padding-top: ${theme.spacing(22)};
  }
`;

export default getSkillDescriptionCss;
