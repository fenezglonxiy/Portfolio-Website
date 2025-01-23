import { alpha, buttonClasses, css, Theme } from "@mui/material";
import { SerializedStyles } from "@emotion/react";

import { ButtonProps } from "./Button";

const getButtonVariantCss = (variant: ButtonProps["variant"]) => {
  const cssByVariant: Record<
    NonNullable<ButtonProps["variant"]>,
    SerializedStyles
  > = {
    contained: css`
      background-color: var(--variant-contained-background-color);
      color: var(--variant-contained-color);

      &:hover,
      &:focus,
      &[aria-current="page"] {
        background-color: var(--variant-contained-background-color);
        color: var(--variant-contained-color);
      }
    `,

    outlined: css`
      border-width: 1px;
      border-style: solid;
      border-color: var(--variant-outlined-border-color);
      color: var(--variant-outlined-color);
      transition: opacity 0.2s;

      &:hover,
      &:focus,
      &[aria-current="page"] {
        background-color: transparent;

        &:hover,
        &:focus {
          opacity: 0.6;
        }
      }
    `,

    text: css`
      color: var(--variant-text-color);

      &:hover,
      &:focus,
      &[aria-current="page"] {
        background-color: var(--variant-text-background-color);
      }
    `,
  };

  return cssByVariant[variant as NonNullable<ButtonProps["variant"]>];
};

const getButtonSizeCss = (theme: Theme, size: ButtonProps["size"]) => {
  const cssBySize: Record<
    NonNullable<ButtonProps["size"]>,
    SerializedStyles
  > = {
    small: css`
      min-width: 40px;
      padding: ${theme.spacing(2)};
      ${theme.typography.body1}
      font-weight: ${theme.typography.fontWeightSemibold};
    `,

    medium: css`
      min-width: 64px;
      padding: ${theme.spacing(3)} ${theme.spacing(6)};
      ${theme.typography.body2Medium};
      font-weight: ${theme.typography.fontWeightSemibold};
    `,

    large: css`
      min-width: auto;
      padding: ${theme.spacing(6)} ${theme.spacing(12)};
      ${theme.typography.body1Medium};
      font-weight: ${theme.typography.fontWeightBold};
    `,
  };

  return cssBySize[size as NonNullable<ButtonProps["size"]>];
};

const getButtonColorCss = (theme: Theme, color: ButtonProps["color"]) => {
  const cssByColor: Record<
    NonNullable<ButtonProps["color"]>,
    SerializedStyles
  > = {
    primary: css`
      --variant-contained-background-color: ${theme.palette.neutral[800]};
      --variant-contained-color: ${theme.palette.common.white};

      --variant-outlined-border-color: ${theme.palette.neutral[900]};
      --variant-outlined-color: ${theme.palette.neutral[900]};

      --variant-text-color: ${theme.palette.primary.light};

      &:hover,
      &:focus,
      &[aria-current="page"] {
        --variant-contained-background-color: ${theme.palette.neutral[550]};
        --variant-contained-color: ${theme.palette.neutral[400]};

        --variant-text-background-color: ${alpha(
          theme.palette.primary.light,
          0.08
        )};
      }
    `,

    secondary: css`
      --variant-contained-background-color: ${theme.palette.neutral[200]};
      --variant-contained-color: ${theme.palette.neutral[800]};

      --variant-outlined-border-color: ${theme.palette.neutral[400]};
      --variant-outlined-color: ${theme.palette.neutral[800]};

      --variant-text-color: ${theme.palette.secondary.light};

      &:hover,
      &:focus,
      &[aria-current="page"] {
        --variant-contained-background-color: ${theme.palette.neutral[400]};
        --variant-contained-color: ${theme.palette.neutral[650]};

        --variant-text-background-color: ${alpha(
          theme.palette.secondary.light,
          0.08
        )};
      }
    `,

    white: css`
      --variant-contained-background-color: ${theme.palette.common.white};
      --variant-contained-color: ${theme.palette.neutral[800]};

      --variant-outlined-border-color: ${theme.palette.common.white};
      --variant-outlined-color: ${theme.palette.common.white};

      --variant-text-color: ${theme.palette.common.white};

      &:hover,
      &:focus,
      &[aria-current="page"] {
        --variant-contained-background-color: ${theme.palette.neutral[200]};
        --variant-contained-color: ${theme.palette.neutral[650]};

        --variant-text-background-color: ${alpha(
          theme.palette.common.white,
          0.08
        )};
      }
    `,

    indigo: css`
      --variant-contained-background-color: ${theme.palette.indigo[600]};
      --variant-contained-color: ${theme.palette.common.white};

      --variant-outlined-border-color: ${theme.palette.indigo[600]};
      --variant-outlined-color: ${theme.palette.indigo[600]};

      --variant-text-color: ${theme.palette.indigo[600]};

      &:hover,
      &:focus,
      &[aria-current="page"] {
        --variant-contained-background-color: ${theme.palette.indigo[700]};

        --variant-text-background-color: ${theme.palette.indigo[50]};
      }
    `,

    slate: css`
      --variant-contained-background-color: ${theme.palette.slate[600]};
      --variant-contained-color: ${theme.palette.common.white};

      --variant-outlined-border-color: ${theme.palette.slate[600]};
      --variant-outlined-color: ${theme.palette.slate[600]};

      --variant-text-color: ${theme.palette.slate[600]};

      &:hover,
      &:focus,
      &[aria-current="page"] {
        --variant-contained-background-color: ${theme.palette.slate[700]};

        --variant-text-background-color: ${theme.palette.slate[50]};
      }
    `,
  };

  return cssByColor[color as NonNullable<ButtonProps["color"]>];
};

const getButtonShapeCss = (theme: Theme, shape: ButtonProps["shape"]) => {
  const cssByShape: Record<
    NonNullable<ButtonProps["shape"]>,
    SerializedStyles
  > = {
    rounded: css`
      border-radius: ${theme.shape.sm};
    `,

    pill: css`
      border-radius: ${theme.shape.pill};
    `,

    circle: css`
      border-radius: ${theme.shape.circle};
    `,
  };

  return cssByShape[shape as NonNullable<ButtonProps["shape"]>];
};

const getButtonCss = (theme: Theme, props: ButtonProps) => css`
  ${getButtonVariantCss(props.variant)};
  ${getButtonColorCss(theme, props.color)};
  ${getButtonSizeCss(theme, props.size)};
  ${getButtonShapeCss(theme, props.shape)};
  text-transform: capitalize;

  ${props.fullWidth &&
  css`
    width: 100%;
  `};

  & .${buttonClasses.endIcon} > *:nth-of-type(1) {
    font-size: unset;
  }

  & i {
    color: inherit;
  }
`;

export default getButtonCss;
