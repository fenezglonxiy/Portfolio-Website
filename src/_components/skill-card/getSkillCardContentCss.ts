import { css, Theme } from "@mui/material";

const getSkillCardContentCss = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(32)};

  && {
    padding: 0;
  }
`;

export default getSkillCardContentCss;
