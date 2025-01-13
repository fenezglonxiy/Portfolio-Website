import { buttonClasses, css, Theme } from "@mui/material";
import { SerializedStyles } from "@emotion/react";

import { ButtonProps } from "./Button";

const getButtonVariantCss = (variant: ButtonProps["variant"]) => {
  const cssByVariant: Record<
    NonNullable<ButtonProps["variant"]>,
    SerializedStyles
  > = {
    contained: css`
      background-color: var(--button-background-color);
      color: var(--button-color);

      &:hover,
      &:focus,
      &[aria-current="page"] {
        background-color: var(
          --button-hover-background-color,
          var(--button-background-color)
        );
        color: var(--button-hover-color, var(--button-color));
      }
    `,

    outlined: css`
      border-width: 1px;
      border-style: solid;
      border-color: var(--button-border-color);
      color: var(--button-color);
      transition: opacity 0.2s;

      &:hover,
      &:focus,
      &[aria-current="page"] {
        border-color: var(
          --button-hover-border-color,
          var(--button-border-color)
        );
        background-color: transparent;
        &:hover,
        &:focus {
          opacity: 0.6;
        }
      }
    `,

    text: css`
      color: var(--button-color);

      &:hover,
      &:focus,
      &[aria-current="page"] {
        background-color: var(--button-hover-background-color);
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

const getButtonColorCss = (
  theme: Theme,
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) => {
  const cssByVariantColor: Record<
    NonNullable<ButtonProps["variant"]>,
    Record<NonNullable<ButtonProps["color"]>, SerializedStyles>
  > = {
    contained: {
      primary: css`
        --button-background-color: ${theme.palette.neutral[800]};
        --button-color: ${theme.palette.common.white};
        --button-hover-background-color: ${theme.palette.neutral[550]};
        --button-hover-color: ${theme.palette.neutral[400]};
      `,

      secondary: css`
        --button-background-color: ${theme.palette.neutral[200]};
        --button-color: ${theme.palette.neutral[800]};
        --button-hover-background-color: ${theme.palette.neutral[400]};
        --button-hover-color: ${theme.palette.neutral[650]};
      `,

      white: css`
        --button-background-color: ${theme.palette.common.white};
        --button-color: ${theme.palette.neutral[800]};
        --button-hover-background-color: ${theme.palette.neutral[200]};
        --button-hover-color: ${theme.palette.neutral[650]};
      `,

      indigo: css`
        --button-background-color: ${theme.palette.indigo[600]};
        --button-color: ${theme.palette.common.white};
        --button-hover-background-color: ${theme.palette.indigo[700]};
      `,

      slate: css`
        --button-background-color: ${theme.palette.slate[600]};
        --button-color: ${theme.palette.common.white};
        --button-hover-background-color: ${theme.palette.slate[700]};
      `,
    },

    outlined: {
      primary: css`
        --button-border-color: ${theme.palette.neutral[900]};
        --button-color: ${theme.palette.neutral[900]};
      `,

      // --button-hover-color: ${theme.palette.neutral[500]};
      secondary: css`
        --button-border-color: ${theme.palette.neutral[400]};
        --button-color: ${theme.palette.neutral[800]};
      `,

      white: css`
        --button-border-color: ${theme.palette.common.white};
        --button-color: ${theme.palette.common.white};
      `,

      indigo: css`
        --button-border-color: ${theme.palette.indigo[600]};
        --button-color: ${theme.palette.indigo[600]};
      `,

      slate: css`
        --button-border-color: ${theme.palette.slate[600]};
        --button-color: ${theme.palette.slate[600]};
      `,
    },

    text: {
      primary: css``,

      secondary: css``,

      white: css``,

      indigo: css`
        --button-color: ${theme.palette.indigo[600]};
        --button-hover-background-color: ${theme.palette.indigo[50]};
      `,

      slate: css`
        --button-color: ${theme.palette.slate[600]};
        --button-hover-background-color: ${theme.palette.slate[100]};
      `,
    },
  };

  return cssByVariantColor[variant as NonNullable<ButtonProps["variant"]>][
    color as NonNullable<ButtonProps["color"]>
  ];
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
  ${getButtonColorCss(theme, props.variant, props.color)};
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
