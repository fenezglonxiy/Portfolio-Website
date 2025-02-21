import { css, Theme } from "@mui/material";

const getSkillCardMediaCss = (theme: Theme) => css`
  width: 31.5vw;
  height: 100%;

  && > * {
    border-radius: ${theme.shape["sm"]};
  }

  ${theme.breakpoints.up(theme.breakpoints.values.md)} {
    aspect-ratio: 3 / 2;
  }

  ${theme.breakpoints.down(theme.breakpoints.values.md)} {
    padding-top: ${theme.spacing(22)};
    width: 100%;
  }
`;

export default getSkillCardMediaCss;
