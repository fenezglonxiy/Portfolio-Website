/** @jsxImportSource @emotion/react */

"use client";

import {
  FormLabel as MUIFormLabel,
  FormLabelProps as MUIFormLabelProps,
  useFormControl as useMUIFormControl,
  useTheme,
} from "@mui/material";
import React from "react";
import { useFormControlContext } from "./FormControlContext";
import { Typography } from "@/_components/Typography";
import { VisuallyHidden } from "@/_components/visually-hidden";
import getFormLabelCss from "./getFormLabelCss";
import useFormField from "./useFormField";

type FormLabelBaseProps = {
  /**
   * Control whether to mark the input as optional next to the label.
   */
  optional?: boolean;

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
    includesRequiredIndicatorWithLabel,
    htmlFor,
    id,
    optionalIndicator,
    requiredIndicator,
    ...rest
  } = props;
  const muiFormControl = useMUIFormControl();
  const _ = useFormControlContext({
    id: htmlFor,
  });
  const { id: formControlId, labelId } = useFormField();
  const showOptionalIndicator = !muiFormControl?.required || optional;
  const showRequiredIndicator =
    muiFormControl?.required && includesRequiredIndicatorWithLabel;
  const theme = useTheme();
  const css = getFormLabelCss(theme);

  return (
    <MUIFormLabel
      ref={ref}
      htmlFor={formControlId}
      id={labelId}
      css={css}
      {...rest}
    >
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
