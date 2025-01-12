import { alpha, css, inputClasses, Theme } from "@mui/material";
import { SerializedStyles } from "@mui/styled-engine";

import { StandardInputProps } from "./StandardInput";

const getStandardInputColorCss = (
  theme: Theme,
  color: StandardInputProps["color"]
) => {
  const cssByColor: Record<
    NonNullable<StandardInputProps["color"]>,
    SerializedStyles
  > = {
    primary: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-border-bottom-color: ${alpha(theme.palette.common.black, 0.42)};
      --input-hovered-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.87
      )};
      --input-focused-border-bottom-color: ${theme.palette.primary.light};
      --input-filled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
    `,

    secondary: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-border-bottom-color: ${alpha(theme.palette.common.black, 0.42)};
      --input-hovered-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.87
      )};
      --input-focused-border-bottom-color: ${theme.palette.secondary.light};
      --input-filled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
    `,

    info: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-border-bottom-color: ${alpha(theme.palette.common.black, 0.42)};
      --input-hovered-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.87
      )};
      --input-focused-border-bottom-color: ${theme.palette.info.light};
      --input-filled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
    `,

    warning: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-border-bottom-color: ${alpha(theme.palette.common.black, 0.42)};
      --input-hovered-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.87
      )};
      --input-focused-border-bottom-color: ${theme.palette.warning.light};
      --input-filled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
    `,

    error: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-border-bottom-color: ${alpha(theme.palette.common.black, 0.42)};
      --input-hovered-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.87
      )};
      --input-focused-border-bottom-color: ${theme.palette.error.light};
      --input-filled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
    `,

    success: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-border-bottom-color: ${alpha(theme.palette.common.black, 0.42)};
      --input-hovered-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.87
      )};
      --input-focused-border-bottom-color: ${theme.palette.success.light};
      --input-filled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-border-bottom-color: ${alpha(
        theme.palette.common.black,
        0.42
      )};
    `,

    indigo: css`
      --input-color: ${theme.palette.slate[600]};
      --input-border-bottom-color: ${theme.palette.slate[300]};
      --input-hovered-border-bottom-color: ${theme.palette.slate[600]};
      --input-focused-border-bottom-color: ${theme.palette.indigo[300]};
      --input-filled-border-bottom-color: ${theme.palette.slate[600]};
      --input-disabled-color: ${theme.palette.slate[300]};
      --input-disabled-border-bottom-color: ${theme.palette.slate[300]};
    `,
  };

  return cssByColor[color as NonNullable<StandardInputProps["color"]>];
};

const getStandardInputCss = (
  theme: Theme,
  props: StandardInputProps,
  options: {
    filled?: boolean;
    color: StandardInputProps["color"];
    includesLegendWithLabel?: boolean;
  }
) => css`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing(3)};
  -webkit-box-align: center;
  ${theme.typography.body2Medium};
  color: var(--input-color);

  ${!options.includesLegendWithLabel &&
  css`
    && {
      margin: 0;
    }
  `}

  &.${inputClasses.underline}::before {
    border-bottom-color: ${options.filled
      ? "var(--input-filled-border-bottom-color)"
      : "var(--input-border-bottom-color)"};
  }

  &.${inputClasses.underline}::after {
    border-bottom-color: var(--input-focused-border-bottom-color);
  }

  &:hover {
    &.${inputClasses.underline}::before {
      border-bottom-color: var(--input-hovered-border-bottom-color);
    }
  }

  &.${inputClasses.focused} {
    &.${inputClasses.underline}::before, &.${inputClasses.underline}::after {
      border-bottom-color: var(--input-focused-border-bottom-color);
    }
  }

  &.${inputClasses.disabled} {
    color: var(--input-disabled-color);

    &.${inputClasses.underline}::before {
      border-bottom-color: var(--input-disabled-border-bottom-color);
    }
  }

  ${getStandardInputColorCss(theme, props.color)};
`;

export default getStandardInputCss;
