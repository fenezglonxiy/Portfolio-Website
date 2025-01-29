import { alpha, css, outlinedInputClasses, Theme } from "@mui/material";
import { SerializedStyles } from "@mui/styled-engine";

import { OutlinedInputProps } from "./OutlinedInput";

const getOutlinedInputColorCss = (
  theme: Theme,
  color: OutlinedInputProps["color"]
) => {
  const cssByColor: Record<
    NonNullable<OutlinedInputProps["color"]>,
    SerializedStyles
  > = {
    primary: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: transparent;
      --input-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-filled-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-hovered-border-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-focused-border-color: ${theme.palette.primary.main};
      --input-focused-box-shadow-color: ${alpha(
        theme.palette.primary.main,
        0.25
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: transparent;
      --input-disabled-border-color: ${alpha(theme.palette.common.black, 0.26)};
    `,

    secondary: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: transparent;
      --input-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-filled-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-hovered-border-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-focused-border-color: ${theme.palette.secondary.main};
      --input-focused-box-shadow-color: ${alpha(
        theme.palette.secondary.main,
        0.25
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: transparent;
      --input-disabled-border-color: ${alpha(theme.palette.common.black, 0.26)};
    `,

    info: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: transparent;
      --input-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-filled-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-hovered-border-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-focused-border-color: ${theme.palette.info.main};
      --input-focused-box-shadow-color: ${alpha(theme.palette.info.main, 0.25)};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: transparent;
      --input-disabled-border-color: ${alpha(theme.palette.common.black, 0.26)};
    `,

    success: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: transparent;
      --input-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-filled-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-hovered-border-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-focused-border-color: ${theme.palette.success.main};
      --input-focused-box-shadow-color: ${alpha(
        theme.palette.success.main,
        0.25
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: transparent;
      --input-disabled-border-color: ${alpha(theme.palette.common.black, 0.26)};
    `,

    warning: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: transparent;
      --input-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-filled-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-hovered-border-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-focused-border-color: ${theme.palette.warning.main};
      --input-focused-box-shadow-color: ${alpha(
        theme.palette.warning.main,
        0.25
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: transparent;
      --input-disabled-border-color: ${alpha(theme.palette.common.black, 0.26)};
    `,

    error: css`
      --input-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-background-color: transparent;
      --input-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-filled-border-color: ${alpha(theme.palette.common.black, 0.23)};
      --input-hovered-border-color: ${alpha(theme.palette.common.black, 0.87)};
      --input-focused-border-color: ${theme.palette.error.main};
      --input-focused-box-shadow-color: ${alpha(
        theme.palette.error.main,
        0.25
      )};
      --input-disabled-color: ${alpha(theme.palette.common.black, 0.38)};
      --input-disabled-background-color: transparent;
      --input-disabled-border-color: ${alpha(theme.palette.common.black, 0.26)};
    `,

    black: css`
      --input-color: ${alpha(theme.palette.neutral[900], 0.87)};
      --input-background-color: transparent;
      --input-border-color: ${alpha(theme.palette.neutral[900], 0.23)};
      --input-filled-border-color: ${alpha(theme.palette.neutral[900], 0.23)};
      --input-hovered-border-color: ${alpha(theme.palette.neutral[900], 0.87)};
      --input-focused-border-color: ${theme.palette.neutral[900]};
      --input-focused-box-shadow-color: ${alpha(
        theme.palette.neutral[900],
        0.25
      )};
      --input-disabled-color: ${alpha(theme.palette.neutral[900], 0.38)};
      --input-disabled-background-color: transparent;
      --input-disabled-border-color: ${alpha(theme.palette.neutral[900], 0.26)};
    `,

    indigo: css`
      --input-color: ${theme.palette.slate[600]};
      --input-background-color: transparent;
      --input-border-color: ${theme.palette.slate[300]};
      --input-filled-border-color: ${theme.palette.slate[600]};
      --input-hovered-border-color: ${theme.palette.slate[400]};
      --input-focused-border-color: ${theme.palette.indigo[300]};
      --input-focused-box-shadow-color: ${alpha(
        theme.palette.indigo[300],
        0.25
      )};
      --input-disabled-color: ${theme.palette.slate[300]};
      --input-disabled-background-color: ${theme.palette.slate[50]};
      --input-disabled-border-color: ${theme.palette.slate[300]};
    `,
  };

  return cssByColor[color as NonNullable<OutlinedInputProps["color"]>];
};

const getOutlinedInputCss = (
  theme: Theme,
  props: OutlinedInputProps,
  options: {
    filled?: boolean;
    color: OutlinedInputProps["color"];
    includesLegendWithLabel?: boolean;
  }
) => css`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing(3)};
  -webkit-box-align: center;
  ${theme.typography.body2Medium};
  color: var(--input-color);
  background-color: var(--input-background-color);

  ${!options.includesLegendWithLabel &&
  css`
    && {
      margin: 0;
    }
  `}

  & .${outlinedInputClasses.input} {
    padding: ${theme.spacing(3)};
  }

  & .${outlinedInputClasses.notchedOutline} {
    border-color: ${options.filled
      ? "var(--input-border-color)"
      : "var(--input-filled-border-color)"};
    border-radius: ${theme.shape[
      props.borderRadius as NonNullable<OutlinedInputProps["borderRadius"]>
    ]};
  }

  &:hover {
    & .${outlinedInputClasses.notchedOutline} {
      border-color: var(--input-hovered-border-color);
    }
  }

  &.${outlinedInputClasses.focused} {
    & .${outlinedInputClasses.notchedOutline} {
      border-color: var(--input-focused-border-color);
      box-shadow: 0 0 0 4px var(--input-focused-box-shadow-color);
    }
  }

  &.${outlinedInputClasses.disabled} {
    color: var(--input-disabled-color);
    background-color: var(--input-disabled-background-color);

    & .${outlinedInputClasses.notchedOutline} {
      border-color: var(--input-disabled-border-color);
    }
  }

  ${getOutlinedInputColorCss(theme, options.color)};
`;

export default getOutlinedInputCss;
