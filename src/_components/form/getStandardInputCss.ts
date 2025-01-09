import { css, inputClasses, Theme } from "@mui/material";

const getStandardInputCss = (theme: Theme, filled: boolean) => css`
  color: ${theme.palette.slate[600]};

  &.${inputClasses.underline}::before {
    border-bottom-color: ${filled
      ? theme.palette.slate[600]
      : theme.palette.slate[300]};
  }

  &.${inputClasses.underline}::after {
    border-bottom-color: ${theme.palette.indigo[300]};
  }

  &:hover {
    &.${inputClasses.underline}::before {
      border-bottom-color: ${filled
        ? theme.palette.slate[700]
        : theme.palette.slate[400]};
    }
  }

  &.${inputClasses.focused} {
    &.${inputClasses.underline}::before, &.${inputClasses.underline}::after {
      border-bottom-color: ${theme.palette.indigo[300]};
    }
  }

  &.${inputClasses.disabled} {
    color: ${theme.palette.slate[300]};

    &.${inputClasses.underline}::before {
      border-bottom-color: ${theme.palette.slate[300]};
    }
  }
`;

export default getStandardInputCss;
