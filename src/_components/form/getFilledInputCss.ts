import { css, filledInputClasses, Theme } from "@mui/material";

const getFilledInputCss = (theme: Theme, filled: boolean) => css`
  color: ${theme.palette.common.white};
  background-color: ${filled
    ? theme.palette.slate[600]
    : theme.palette.slate[300]};

  & .${filledInputClasses.input} {
    padding: ${theme.spacing(5.125)} ${theme.spacing(3)} ${theme.spacing(0.875)};
  }

  &:hover {
    background-color: ${theme.palette.slate[400]};
  }

  &.${filledInputClasses.focused} {
    background-color: ${theme.palette.indigo[300]};
  }

  &.${filledInputClasses.disabled} {
    color: ${theme.palette.slate[300]};
    background-color: ${theme.palette.slate[50]};
  }
`;

export default getFilledInputCss;
