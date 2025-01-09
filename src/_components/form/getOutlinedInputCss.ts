import { alpha, css, outlinedInputClasses, Theme } from "@mui/material";

const getOutlinedInputCss = (theme: Theme, filled: boolean) => css`
  color: ${theme.palette.slate[600]};
  background-color: ${theme.palette.common.white};

  & .${outlinedInputClasses.input} {
    padding: ${theme.spacing(3)};
  }

  & .${outlinedInputClasses.notchedOutline} {
    border-color: ${filled
      ? theme.palette.slate[600]
      : theme.palette.slate[300]};
  }

  &:hover {
    & .${outlinedInputClasses.notchedOutline} {
      border-color: ${theme.palette.slate[400]};
    }
  }

  &.${outlinedInputClasses.focused} {
    & .${outlinedInputClasses.notchedOutline} {
      border-color: ${theme.palette.indigo[300]};
      box-shadow: 0 0 0 4px ${alpha(theme.palette.indigo[300], 0.25)};
    }
  }

  &.${outlinedInputClasses.disabled} {
    color: ${theme.palette.slate[300]};
    background-color: ${theme.palette.slate[50]};

    & .${outlinedInputClasses.notchedOutline} {
      border-color: ${theme.palette.slate[300]};
    }
  }
`;

export default getOutlinedInputCss;
