import {
  css,
  formLabelClasses,
  outlinedInputClasses,
  Theme,
} from "@mui/material";

import { FormLabelProps } from "./FormLabel";
import { FormControlBaseProps } from "./FormControl";
import { SerializedStyles } from "@mui/styled-engine";

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

    standard: css``,
  };

  return cssByVariant[variant as NonNullable<FormControlBaseProps["variant"]>];
};

const getFormLabelCss = (
  theme: Theme,
  props: FormLabelProps,
  variant: FormControlBaseProps["variant"]
) => css`
  ${theme.typography.body2Medium};
  font-weight: ${theme.typography.fontWeightMedium};
  color: ${theme.palette.slate[600]};

  &
    + .${outlinedInputClasses.root}
    .${outlinedInputClasses.notchedOutline}
    span {
    font-weight: ${theme.typography.fontWeightMedium};
  }

  &.${formLabelClasses.error} {
    color: unset;
  }

  ${getFormLabelVariantCss(theme, props.includesLegendWithLabel, variant)};

  &.${formLabelClasses.disabled} {
    color: ${theme.palette.slate[300]};
  }

  ${props.includesLegendWithLabel &&
  css`
    &.${formLabelClasses.focused} {
      color: ${theme.palette.indigo[400]};
    }
  `}

  ${!props.includesLegendWithLabel &&
  css`
    margin-bottom: ${theme.spacing(3)};

    & .${formLabelClasses.asterisk} {
      display: none;
    }
  `}
`;

export default getFormLabelCss;
