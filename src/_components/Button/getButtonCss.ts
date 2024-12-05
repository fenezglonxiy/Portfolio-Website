import { css, Theme } from "@mui/material";
import { ButtonProps } from "./Button";
import { SerializedStyles } from "@emotion/react";

const getButtonVariantCss = (variant: ButtonProps["variant"]) => {
  const cssByVariant: Record<
    NonNullable<ButtonProps["variant"]>,
    SerializedStyles
  > = {
    contained: css`
      background-color: var(--button-background-color);
      color: var(--button-color);

      &:hover,
      &:focus {
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

      &:hover,
      &:focus {
        border-color: var(
          --button-hover-border-color,
          var(--button-border-color)
        );
        color: var(--button-hover-color, var(--button-color));
        background-color: transparent;
      }
    `,

    ghost: css`
      border-width: 1px;
      border-style: solid;
      border-color: var(--button-border-color);
      color: var(--button-color);

      &:hover,
      &:focus {
        color: var(--button-border-color);
        border-color: var(--button-color);
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
    sm: css`
      min-width: 64px;
      padding: ${theme.spacing(3)} ${theme.spacing(6)};
      ${theme.typography.body2Medium};
      font-weight: ${theme.typography.fontWeightSemibold};
    `,

    md: css`
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
    },

    outlined: {
      primary: css`
        --button-border-color: ${theme.palette.neutral[400]};
        --button-color: ${theme.palette.neutral[800]};
        --button-hover-color: ${theme.palette.neutral[500]};
      `,

      secondary: css`
        --button-border-color: ${theme.palette.common.white};
        --button-color: ${theme.palette.common.white};

        &:hover,
        &:focus {
          opacity: 0.6;
        }
      `,
    },

    ghost: {
      primary: css`
        --button-border-color: ${theme.palette.neutral[400]};
        --button-color: ${theme.palette.neutral[800]};
      `,

      secondary: css``,
    },
  };

  return cssByVariantColor[variant as NonNullable<ButtonProps["variant"]>][
    color as NonNullable<ButtonProps["color"]>
  ];
};

const getButtonShapeCss = (shape: ButtonProps["shape"]) => {
  const cssByShape: Record<
    NonNullable<ButtonProps["shape"]>,
    SerializedStyles
  > = {
    rounded: css`
      border-radius: 12px;
    `,

    pill: css`
      border-radius: 999em;
    `,

    circle: css`
      border-radius: 50%;
    `,
  };

  return cssByShape[shape as NonNullable<ButtonProps["shape"]>];
};

const getButtonCss = (theme: Theme, props: ButtonProps) => css`
  ${getButtonVariantCss(props.variant)};
  ${getButtonColorCss(theme, props.variant, props.color)};
  ${getButtonSizeCss(theme, props.size)};
  ${getButtonShapeCss(props.shape)};

  ${props.fullWidth &&
  css`
    width: 100%;
  `};
`;

export default getButtonCss;
