import { SerializedStyles } from "@emotion/react";
import { alpha, css, Theme } from "@mui/material";

import { ChipProps } from "./Chip";

const getChipVariantCss = (variant: ChipProps["variant"]) => {
  const cssByVariant: Record<
    NonNullable<ChipProps["variant"]>,
    SerializedStyles
  > = {
    filled: css`
      background-color: var(--variant-filled-background-color);
      color: var(--variant-filled-color);
    `,

    outlined: css`
      border-color: var(--variant-outlined-border-color);
      color: var(--variant-outlined-color);
    `,
  };

  return cssByVariant[variant as NonNullable<ChipProps["variant"]>];
};

const getChipColorCss = (
  theme: Theme,
  color: ChipProps["color"],
  clickable: ChipProps["clickable"]
) => {
  const cssByColor: Record<
    NonNullable<ChipProps["color"]>,
    SerializedStyles
  > = {
    default: css`
      --variant-filled-background-color: ${theme.palette.neutral[400]};
      --variant-filled-color: ${theme.palette.neutral[800]};

      --variant-outlined-border-color: ${alpha(
        theme.palette.neutral[400],
        0.7
      )};
      --variant-outlined-color: ${theme.palette.neutral[400]};

      ${clickable &&
      css`
        &:hover,
        &:focus,
        &[aria-selected="true"] {
          --variant-filled-background-color: ${theme.palette.neutral[500]};

          --variant-outlined-background-color: ${alpha(
            theme.palette.neutral[400],
            0.08
          )};
        }
      `}
    `,

    primary: css`
      --variant-filled-background-color: ${theme.palette.primary.light};
      --variant-filled-color: ${theme.palette.common.white};

      --variant-outlined-border-color: ${alpha(
        theme.palette.primary.light,
        0.7
      )}
      --variant-outlined-color: ${theme.palette.primary.light};

      ${
        clickable &&
        css`
          &:hover,
          &:focus,
          &[aria-selected="true"] {
            --variant-filled-background-color: ${theme.palette.primary.main};

            --variant-outlined-background-color: ${alpha(
              theme.palette.primary.light,
              0.08
            )};
          }
        `
      }
    `,

    secondary: css`
      --variant-filled-background-color: ${theme.palette.secondary.light};
      --variant-filled-color: ${theme.palette.common.white};

      --variant-outlined-border-color: ${alpha(
        theme.palette.secondary.light,
        0.7
      )}
      --variant-outlined-color: ${theme.palette.secondary.light};

      ${
        clickable &&
        css`
          &:hover,
          &:focus,
          &[aria-selected="true"] {
            --variant-filled-background-color: ${theme.palette.secondary.main};

            --variant-outlined-background-color: ${alpha(
              theme.palette.secondary.light,
              0.08
            )};
          }
        `
      }
    `,

    info: css`
      --variant-filled-background-color: ${theme.palette.info.light};
      --variant-filled-color: ${theme.palette.common.white};

      --variant-outlined-border-color: ${alpha(theme.palette.info.light, 0.7)}
      --variant-outlined-color: ${theme.palette.info.light};

      ${
        clickable &&
        css`
          &:hover,
          &:focus,
          &[aria-selected="true"] {
            --variant-filled-background-color: ${theme.palette.info.main};

            --variant-outlined-background-color: ${alpha(
              theme.palette.info.light,
              0.08
            )};
          }
        `
      }
    `,

    error: css`
      --variant-filled-background-color: ${theme.palette.error.light};
      --variant-filled-color: ${theme.palette.common.white};

      --variant-outlined-border-color: ${alpha(theme.palette.error.light, 0.7)}
      --variant-outlined-color: ${theme.palette.error.light};

      ${
        clickable &&
        css`
          &:hover,
          &:focus,
          &[aria-selected="true"] {
            --variant-filled-background-color: ${theme.palette.error.main};

            --variant-outlined-background-color: ${alpha(
              theme.palette.error.light,
              0.08
            )};
          }
        `
      }
    `,

    warning: css`
      --variant-filled-background-color: ${theme.palette.warning.light};
      --variant-filled-color: ${theme.palette.common.white};

      --variant-outlined-border-color: ${alpha(
        theme.palette.warning.light,
        0.7
      )}
      --variant-outlined-color: ${theme.palette.warning.light};

      ${
        clickable &&
        css`
          &:hover,
          &:focus,
          &[aria-selected="true"] {
            --variant-filled-background-color: ${theme.palette.warning.main};

            --variant-outlined-background-color: ${alpha(
              theme.palette.warning.light,
              0.08
            )};
          }
        `
      }
    `,

    success: css`
      --variant-filled-background-color: ${theme.palette.success.light};
      --variant-filled-color: ${theme.palette.common.white};

      --variant-outlined-border-color: ${alpha(
        theme.palette.success.light,
        0.7
      )}
      --variant-outlined-color: ${theme.palette.success.light};

      ${
        clickable &&
        css`
          &:hover,
          &:focus,
          &[aria-selected="true"] {
            --variant-filled-background-color: ${theme.palette.success.main};

            --variant-outlined-background-color: ${alpha(
              theme.palette.success.light,
              0.08
            )};
          }
        `
      }
    `,

    white: css`
      --variant-filled-background-color: ${theme.palette.common.white};
      --variant-filled-color: ${theme.palette.neutral[800]};

      --variant-outlined-border-color: ${theme.palette.common.white};
      --variant-outlined-color: ${theme.palette.common.white};

      ${clickable &&
      css`
        &:hover,
        &:focus,
        &[aria-selected="true"] {
          --variant-filled-background-color: ${alpha(
            theme.palette.common.white,
            0.32
          )};

          --variant-outlined-background-color: ${alpha(
            theme.palette.common.white,
            0.08
          )};
        }
      `}
    `,

    indigo: css`
      --variant-filled-background-color: ${theme.palette.indigo[50]};
      --variant-filled-color: ${theme.palette.indigo[600]};

      --variant-outlined-border-color: ${theme.palette.indigo[600]};
      --variant-outlined-color: ${theme.palette.indigo[600]};

      ${clickable &&
      css`
        &:hover,
        &:focus,
        &[aria-selected="true"] {
          --variant-filled-background-color: ${theme.palette.indigo[100]};

          --variant-outlined-background-color: ${alpha(
            theme.palette.indigo[600],
            0.08
          )};
        }
      `};
    `,
  };

  return cssByColor[color as NonNullable<ChipProps["color"]>];
};

const getChipSizeCss = (theme: Theme, size: ChipProps["size"]) => {
  const cssBySize: Record<NonNullable<ChipProps["size"]>, SerializedStyles> = {
    small: css``,

    medium: css`
      ${theme.typography.caption};
    `,

    large: css`
      ${theme.typography.body1};
    `,
  };

  return cssBySize[size as NonNullable<ChipProps["size"]>];
};

const getChipCss = (theme: Theme, props: ChipProps) => css`
  ${getChipVariantCss(props.variant)};
  ${getChipColorCss(theme, props.color, props.clickable)};
  ${getChipSizeCss(theme, props.size)};
  font-weight: ${theme.typography.fontWeightMedium};
`;

export default getChipCss;
