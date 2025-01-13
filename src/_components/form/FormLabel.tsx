/** @jsxImportSource @emotion/react */

"use client";

import {
  FormLabel as MUIFormLabel,
  FormLabelProps as MUIFormLabelProps,
  InputLabel as MUIInputLabel,
  useTheme,
} from "@mui/material";
import React from "react";

import { Typography } from "@/_components/Typography";
import { VisuallyHidden } from "@/_components/visually-hidden";

import getFormLabelCss from "./getFormLabelCss";
import useFormControl from "./useFormControl";

type FormLabelBaseProps = {
  /**
   * Control whether to mark the input as optional next to the label.
   */
  optional?: boolean;

  /**
   * Control whether to add additional display behavior to label.
   */
  includesLegendWithLabel?: boolean;

  /**
   * Control whether to mark the input with required indicator next to the
   * label.
   */
  includesRequiredIndicatorWithLabel?: boolean;

  /**
   * Control the custom optional indicator to render if the input is optional.
   */
  optionalIndicator?: React.ReactNode;

  /**
   * Control the custom required indicator to render if the input is required.
   */
  requiredIndicator?: React.ReactNode;

  /**
   * Control whether the label is hidden.
   */
  hidden?: boolean;
};

export type FormLabelProps = MUIFormLabelProps & FormLabelBaseProps;

function OptionalIndicator() {
  return (
    <Typography
      component="span"
      display="inline-block"
      variant="caption"
      aria-hidden="true"
    >
      <i> optional</i>
    </Typography>
  );
}

function RequiredIndicator() {
  return <VisuallyHidden>required</VisuallyHidden>;
}

const FormLabel = React.forwardRef(function FormLabel(
  props: FormLabelProps,
  ref: React.Ref<HTMLLabelElement>
) {
  const {
    children,
    optional,
    includesLegendWithLabel,
    includesRequiredIndicatorWithLabel,
    htmlFor,
    id,
    optionalIndicator,
    requiredIndicator,
    hidden,
    ...rest
  } = props;
  const formControl = useFormControl();
  const { inputId, labelId } = formControl;
  const { required, variant, color } = formControl;
  const showOptionalIndicator = !required || optional;
  const showRequiredIndicator = required && includesRequiredIndicatorWithLabel;
  const theme = useTheme();
  const css = getFormLabelCss(theme, props, { variant, color });

  if (hidden) {
    return (
      <label
        ref={ref}
        className="visually-hidden"
        htmlFor={inputId}
        id={labelId}
        css={css}
        aria-hidden
      >
        {children}
      </label>
    );
  }

  if (includesLegendWithLabel) {
    return (
      <MUIInputLabel
        ref={ref}
        css={css}
        htmlFor={inputId}
        id={labelId}
        {...rest}
      >
        {children}
      </MUIInputLabel>
    );
  }

  return (
    <MUIFormLabel ref={ref} css={css} htmlFor={inputId} id={labelId} {...rest}>
      {children}

      {showOptionalIndicator &&
        (optionalIndicator ? optionalIndicator : <OptionalIndicator />)}

      {showRequiredIndicator &&
        (requiredIndicator ? requiredIndicator : <RequiredIndicator />)}
    </MUIFormLabel>
  );
});

FormLabel.displayName = "FormLabel";

export default FormLabel;
