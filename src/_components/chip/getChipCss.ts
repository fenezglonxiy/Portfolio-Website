import { SerializedStyles } from "@emotion/react";
import { alpha, css, Theme } from "@mui/material";

import { ChipProps } from "./Chip";

const getChipVariantCss = (
  variant: ChipProps["variant"],
  clickable: ChipProps["clickable"]
) => {
  const cssByVariant: Record<
    NonNullable<ChipProps["variant"]>,
    SerializedStyles
  > = {
    filled: css`
      background-color: var(--chip-background-color);
      color: var(--chip-color);

      ${clickable &&
      css`
        &:hover,
        &:focus,
        &[aria-selected="true"] {
          background-color: var(--chip-hover-background-color);
          color: var(--chip-hover-color, var(--chip-color));
        }
      `}
    `,

    outlined: css`
      border-color: var(--chip-border-color);
      color: var(--chip-color);

      ${clickable &&
      css`
        &:hover,
        &:focus,
        &[aria-selected="true"] {
          background-color: var(--chip-hover-background-color);
        }
      `}
    `,
  };

  return cssByVariant[variant as NonNullable<ChipProps["variant"]>];
};

const getChipColorCss = (
  theme: Theme,
  color: ChipProps["color"],
  variant: ChipProps["variant"]
) => {
  const cssByVariantColor: Record<
    NonNullable<ChipProps["variant"]>,
    Record<NonNullable<ChipProps["color"]>, SerializedStyles>
  > = {
    filled: {
      default: css`
        --chip-background-color: ${theme.palette.neutral[400]};
        --chip-color: ${theme.palette.neutral[800]};
        --chip-hover-background-color: ${theme.palette.neutral[500]};
      `,

      primary: css`
        --chip-background-color: ${theme.palette.primary.light};
        --chip-color: ${theme.palette.neutral[800]};
        --chip-hover-background-color: ${theme.palette.primary.main};
      `,

      secondary: css`
        --chip-background-color: ${theme.palette.secondary.light};
        --chip-color: ${theme.palette.neutral[800]};
        --chip-hover-background-color: ${theme.palette.secondary.main};
      `,

      error: css`
        --chip-background-color: ${theme.palette.error.light};
        --chip-color: ${theme.palette.common.white};
        --chip-hover-background-color: ${theme.palette.error.main};
      `,

      info: css`
        --chip-background-color: ${theme.palette.info.light};
        --chip-color: ${theme.palette.neutral[800]};
        --chip-hover-background-color: ${theme.palette.info.main};
      `,

      success: css`
        --chip-background-color: ${theme.palette.success.light};
        --chip-color: ${theme.palette.neutral[800]};
        --chip-hover-background-color: ${theme.palette.success.main};
      `,

      warning: css`
        --chip-background-color: ${theme.palette.warning.light};
        --chip-color: ${theme.palette.neutral[800]};
        --chip-hover-background-color: ${theme.palette.warning.main};
      `,

      white: css`
        --chip-background-color: ${theme.palette.common.white};
        --chip-color: ${theme.palette.neutral[800]};
        --chip-hover-background-color: ${alpha(
          theme.palette.common.white,
          0.32
        )};
      `,

      indigo: css`
        --chip-background-color: ${theme.palette.indigo[50]};
        --chip-color: ${theme.palette.indigo[600]};
        --chip-hover-background-color: ${theme.palette.indigo[100]};
      `,
    },

    outlined: {
      default: css`
        --chip-border-color: ${alpha(theme.palette.neutral[400], 0.7)};
        --chip-color: ${theme.palette.neutral[400]};
        --chip-hover-background-color: ${alpha(
          theme.palette.neutral[400],
          0.08
        )};
      `,

      primary: css`
        --chip-border-color: ${alpha(theme.palette.primary.light, 0.7)};
        --chip-color: ${theme.palette.primary.light};
        --chip-hover-background-color: ${alpha(
          theme.palette.primary.light,
          0.08
        )};
      `,

      secondary: css`
        --chip-border-color: ${alpha(theme.palette.secondary.light, 0.7)};
        --chip-color: ${theme.palette.secondary.light};
        --chip-hover-background-color: ${alpha(
          theme.palette.secondary.light,
          0.08
        )};
      `,

      error: css`
        --chip-border-color: ${alpha(theme.palette.error.light, 0.7)};
        --chip-color: ${theme.palette.error.light};
        --chip-hover-background-color: ${alpha(
          theme.palette.error.light,
          0.08
        )};
      `,

      info: css`
        --chip-border-color: ${alpha(theme.palette.info.light, 0.7)};
        --chip-color: ${theme.palette.info.light};
        --chip-hover-background-color: ${alpha(theme.palette.info.light, 0.08)};
      `,

      success: css`
        --chip-border-color: ${alpha(theme.palette.success.light, 0.7)};
        --chip-color: ${theme.palette.success.light};
        --chip-hover-background-color: ${alpha(
          theme.palette.success.light,
          0.08
        )};
      `,

      warning: css`
        --chip-border-color: ${alpha(theme.palette.warning.light, 0.7)};
        --chip-color: ${theme.palette.warning.light};
        --chip-hover-background-color: ${alpha(
          theme.palette.warning.light,
          0.08
        )};
      `,

      white: css`
        --chip-border-color: ${theme.palette.common.white};
        --chip-color: ${theme.palette.common.white};
        --chip-hover-background-color: ${alpha(
          theme.palette.common.white,
          0.08
        )};
      `,

      indigo: css`
        --chip-border-color: ${theme.palette.indigo[600]};
        --chip-color: ${theme.palette.indigo[600]};
        --chip-hover-background-color: ${alpha(
          theme.palette.indigo[600],
          0.08
        )};
      `,
    },
  };

  return cssByVariantColor[variant as NonNullable<ChipProps["variant"]>][
    color as NonNullable<ChipProps["color"]>
  ];
};

const getChipCss = (theme: Theme, props: ChipProps) => css`
  ${getChipVariantCss(props.variant, props.clickable)};
  ${getChipColorCss(theme, props.color, props.variant)};

  ${props.size === "medium" &&
  css`
    ${theme.typography.caption};
  `}

  font-weight: ${theme.typography.fontWeightMedium};
`;

export default getChipCss;
