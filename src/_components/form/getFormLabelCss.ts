import {
  alpha,
  css,
  formLabelClasses,
  inputBaseClasses,
  inputClasses,
  outlinedInputClasses,
  Theme,
} from "@mui/material";
import { SerializedStyles } from "@mui/styled-engine";

import { FormLabelProps } from "./FormLabel";
import { FormControlBaseProps } from "./FormControl";

const getFormLabelVariantCss = (
  theme: Theme,
  includesLegendWithLabel: FormLabelProps["includesLegendWithLabel"],
  variant: FormControlBaseProps["variant"]
) => {
  const cssByVariant: Record<
    NonNullable<FormControlBaseProps["variant"]>,
    SerializedStyles
  > = {
    outlined: css`
      ${includesLegendWithLabel &&
      /**
       * transform:
       *    translateX: padding_left_of_input
       *    translateY: center_of_height - center_of_line_height
       * focused-transform, filled-transform: above_origin
       *    translateX: padding_left_of_input
       *    translateY: (line_height * scale_factor / 2)
       */
      css`
        &
          + .${outlinedInputClasses.root}
          .${outlinedInputClasses.notchedOutline}
          span {
          font-weight: ${theme.typography.fontWeightMedium};
        }

        transform: translate(12px, ${theme.spacing(3)}) scale(1);

        &.${formLabelClasses.focused}, &.${formLabelClasses.filled} {
          transform: translate(
              ${theme.spacing(3)},
              calc(-1 * (24px * 0.75 / 2))
            )
            scale(0.75);
        }
      `}
    `,

    filled: css`
      ${includesLegendWithLabel &&
      /**
       * transform:
       *    translateX: padding_left_of_input
       *    translateY: center_of_height - center_of_line_height
       * focused-transform, filled-transform: below_origin
       *    translateX: padding_left_of_input
       *    translateY: padding_top_of_input / 2 -
       *      (line_height * scale_factor / 2)
       */
      css`
        transform: translate(12px, ${theme.spacing(3)}) scale(1);

        &.${formLabelClasses.focused}, &.${formLabelClasses.filled} {
          color: ${theme.palette.neutral[300]};
          transform: translate(${theme.spacing(3)}, 1.25px) scale(0.75);
        }
      `}
    `,

    standard: css`
      ${includesLegendWithLabel &&
      css`
        & + .${inputBaseClasses.root}.${inputClasses.root} {
          margin-top: ${theme.spacing(3.75)};
        }
      `}
    `,
  };

  return cssByVariant[variant as NonNullable<FormControlBaseProps["variant"]>];
};

const getFormLabelColorCss = (
  theme: Theme,
  color: FormControlBaseProps["color"]
) => {
  const cssByColor: Record<
    NonNullable<FormControlBaseProps["color"]>,
    SerializedStyles
  > = {
    primary: css`
      color: ${alpha(theme.palette.common.black, 0.6)};

      &.${formLabelClasses.disabled} {
        color: ${alpha(theme.palette.common.black, 0.38)};
      }

      &.${formLabelClasses.focused} {
        color: ${theme.palette.primary.light};
      }
    `,

    secondary: css`
      color: ${alpha(theme.palette.common.black, 0.6)};

      &.${formLabelClasses.disabled} {
        color: ${alpha(theme.palette.common.black, 0.38)};
      }

      &.${formLabelClasses.focused} {
        color: ${theme.palette.secondary.light};
      }
    `,

    info: css`
      color: ${alpha(theme.palette.common.black, 0.6)};

      &.${formLabelClasses.disabled} {
        color: ${alpha(theme.palette.common.black, 0.38)};
      }

      &.${formLabelClasses.focused} {
        color: ${theme.palette.info.light};
      }
    `,

    warning: css`
      color: ${alpha(theme.palette.common.black, 0.6)};

      &.${formLabelClasses.disabled} {
        color: ${alpha(theme.palette.common.black, 0.38)};
      }

      &.${formLabelClasses.focused} {
        color: ${theme.palette.warning.light};
      }
    `,

    error: css`
      color: ${alpha(theme.palette.common.black, 0.6)};

      &.${formLabelClasses.disabled} {
        color: ${alpha(theme.palette.common.black, 0.38)};
      }

      &.${formLabelClasses.focused} {
        color: ${theme.palette.error.light};
      }
    `,

    success: css`
      color: ${alpha(theme.palette.common.black, 0.6)};

      &.${formLabelClasses.disabled} {
        color: ${alpha(theme.palette.common.black, 0.38)};
      }

      &.${formLabelClasses.focused} {
        color: ${theme.palette.success.light};
      }
    `,

    indigo: css`
      color: ${theme.palette.slate[600]};

      &.${formLabelClasses.disabled} {
        color: ${theme.palette.slate[300]};
      }

      &.${formLabelClasses.focused} {
        color: ${theme.palette.indigo[300]};
      }
    `,
  };

  return cssByColor[color as NonNullable<FormControlBaseProps["color"]>];
};

const getFormLabelCss = (
  theme: Theme,
  props: FormLabelProps,
  options: {
    variant: FormControlBaseProps["variant"];
    color: FormControlBaseProps["color"];
  }
) => css`
  ${theme.typography.body2Medium};
  font-weight: ${theme.typography.fontWeightMedium};
  margin-bottom: ${props.includesLegendWithLabel
    ? undefined
    : theme.spacing(3)};

  & .${formLabelClasses.asterisk} {
    display: none;
  }

  ${getFormLabelVariantCss(
    theme,
    props.includesLegendWithLabel,
    options.variant
  )};

  ${getFormLabelColorCss(theme, options.color)};
`;

export default getFormLabelCss;
