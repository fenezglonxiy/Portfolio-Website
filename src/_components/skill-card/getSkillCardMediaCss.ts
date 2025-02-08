import { css, Theme } from "@mui/material";

const getSkillCardMediaCss = (theme: Theme) => css`
  width: 441px;
  height: 295px;

  && > * {
    border-radius: ${theme.shape["sm"]};
  }
`;

export default getSkillCardMediaCss;
