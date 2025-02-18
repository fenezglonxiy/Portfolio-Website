import { css, Theme } from "@mui/material";

const getSkillListCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(6)};
  padding-block: ${theme.spacing(1)};

  ${theme.breakpoints.up(theme.breakpoints.values.md)} {
    justify-self: flex-end;
  }
`;

export default getSkillListCss;
