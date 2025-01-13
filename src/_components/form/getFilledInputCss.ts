import { alpha, css, filledInputClasses, Theme } from "@mui/material";

import { FilledInputProps } from "./FilledInput";
import { SerializedStyles } from "@mui/styled-engine";

const getFilledInputColorCss = (
  theme: Theme,
  color: FilledInputProps["color"]
) => {
  const cssByColor: Record<
    NonNullable<FilledInputProps["color"]>,
    SerializedStyles
  > = {
    primary: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: ${alpha(theme.palette.common.black, 0.06)};
      --input-filled-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-hovered-background-color: ${alpha(
        theme.palette.common.black,
        0.09
      )};
      --input-focused-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: ${alpha(
        theme.palette.common.black,
        0.12
      )};
    `,

    secondary: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: ${alpha(theme.palette.common.black, 0.06)};
      --input-filled-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-hovered-background-color: ${alpha(
        theme.palette.common.black,
        0.09
      )};
      --input-focused-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: ${alpha(
        theme.palette.common.black,
        0.12
      )};
    `,

    info: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: ${alpha(theme.palette.common.black, 0.06)};
      --input-filled-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-hovered-background-color: ${alpha(
        theme.palette.common.black,
        0.09
      )};
      --input-focused-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: ${alpha(
        theme.palette.common.black,
        0.12
      )};
    `,

    warning: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: ${alpha(theme.palette.common.black, 0.06)};
      --input-filled-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-hovered-background-color: ${alpha(
        theme.palette.common.black,
        0.09
      )};
      --input-focused-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: ${alpha(
        theme.palette.common.black,
        0.12
      )};
    `,

    error: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: ${alpha(theme.palette.common.black, 0.06)};
      --input-filled-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-hovered-background-color: ${alpha(
        theme.palette.common.black,
        0.09
      )};
      --input-focused-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: ${alpha(
        theme.palette.common.black,
        0.12
      )};
    `,

    success: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: ${alpha(theme.palette.common.black, 0.06)};
      --input-filled-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-hovered-background-color: ${alpha(
        theme.palette.common.black,
        0.09
      )};
      --input-focused-background-color: ${alpha(
        theme.palette.common.black,
        0.06
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: ${alpha(
        theme.palette.common.black,
        0.12
      )};
    `,

    black: css`
      --input-color: ${alpha(theme.palette.neutral[900], 0.87)};
      --input-background-color: ${alpha(theme.palette.neutral[900], 0.06)};
      --input-filled-background-color: ${alpha(
        theme.palette.neutral[900],
        0.06
      )};
      --input-hovered-background-color: ${alpha(
        theme.palette.neutral[900],
        0.09
      )};
      --input-focused-background-color: ${alpha(
        theme.palette.neutral[900],
        0.06
      )};
      --input-disabled-color: ${alpha(theme.palette.neutral[900], 0.38)};
      --input-disabled-background-color: ${alpha(
        theme.palette.neutral[900],
        0.12
      )};
    `,

    indigo: css`
      --input-color: ${theme.palette.common.white};
      --input-background-color: ${theme.palette.slate[300]};
      --input-filled-background-color: ${theme.palette.slate[600]};
      --input-hovered-background-color: ${theme.palette.slate[400]};
      --input-focused-background-color: ${theme.palette.indigo[300]};
      --input-disabled-color: ${theme.palette.slate[300]};
      --input-disabled-background-color: ${theme.palette.slate[50]};
    `,
  };

  return cssByColor[color as NonNullable<FilledInputProps["color"]>];
};

const getFilledInputCss = (
  theme: Theme,
  props: FilledInputProps,
  options: {
    filled?: boolean;
    color: FilledInputProps["color"];
    includesLegendWithLabel?: boolean;
  }
) => css`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing(3)};
  -webkit-box-align: center;
  ${theme.typography.body2Medium};
  color: var(--input-color);
  background-color: ${options.filled
    ? "var(--input-filled-background-color)"
    : "var(--input-background-color)"};
  border-radius: ${theme.shape[
    props.borderRadius as NonNullable<FilledInputProps["borderRadius"]>
  ]};

  ${!options.includesLegendWithLabel &&
  css`
    && {
      margin: 0;
    }
  `}

  & .${filledInputClasses.input} {
    padding-block: ${theme.spacing(5.125)} ${theme.spacing(0.875)};
    padding-inline: ${props.borderRadius === "pill"
      ? theme.spacing(4)
      : theme.spacing(3)};
  }

  &:hover {
    background-color: var(--input-hovered-background-color);
  }

  &.${filledInputClasses.focused} {
    background-color: var(--input-focused-background-color);
  }

  &.${filledInputClasses.disabled} {
    color: var(--input-disabled-color);
    background-color: var(--input-disabled-background-color);
  }

  ${getFilledInputColorCss(theme, options.color)};
`;

export default getFilledInputCss;
