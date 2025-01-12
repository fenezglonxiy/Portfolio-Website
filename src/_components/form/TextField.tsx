import React from "react";

import FormControl, { FormControlBaseProps } from "./FormControl";
import FormLabel, { FormLabelProps } from "./FormLabel";
import FormHelperText from "./FormHelperText";
import FormValidationText from "./FormValidationText";
import Input, { InputProps } from "./Input";
import TextFieldContext from "./TextFieldContext";

export type TextFieldProps = {
  /**
   * The label of the form control.
   */
  label?: string;

  /**
   * Default value for the form control.
   * Use when the component is not controlled.
   */
  defaultValue?: string;

  /**
   * Value of the form control.
   * Requires for a controlled component.
   */
  value?: string;

  /**
   * Control max characters and appropriately adjust the width of the form
   * control.
   */
  maxLength?: number;

  /**
   * Control HTML5 `input` attribute value.
   * @default "text"
   */
  type?: "text" | "number" | "email" | "password" | "tel" | "url";

  /**
   * Control ref passed to the input element.
   */
  inputRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>;

  /**
   * Control whether to add additional display behavior to label.
   * If `slotProps.label.includesLegendWithLabel` is specified, it will take
   * the precedence.
   */
  includesLegendWithLabel?: FormLabelProps["includesLegendWithLabel"];

  /**
   * Control additional class names for the root element.
   */
  className?: string;

  /**
   * Control the helper text for the field.
   */
  helperText?: string;

  /**
   * Control whether the label is hidden.
   * If `slotProps.label.hidden` is specified, it will take the precedence.
   */
  hiddenLabel?: FormLabelProps["hidden"];

  /**
   * The props used for each slot inside.
   */
  slotProps?: {
    label?: FormLabelProps;
  };
} & FormControlBaseProps &
  Pick<
    InputProps,
    | "onBlur"
    | "onFocus"
    | "onChange"
    | "rows"
    | "minRows"
    | "maxRows"
    | "startAdornment"
    | "endAdornment"
    | "inputProps"
    | "placeholder"
    | "value"
    | "name"
    | "borderRadius"
    | "autoFocus"
    | "autoComplete"
    | "multiline"
  >;

const TextField = React.forwardRef(function TextField(
  props: TextFieldProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    id,
    label,
    disabled,
    fullWidth,
    optional,
    inputProps,
    maxLength,
    helperText,
    hiddenLabel,
    className,
    includesLegendWithLabel,
    variant = "outlined",
    color = "primary",
    slotProps,
    ...inputComponentProps
  } = props;

  return (
    <FormControl
      ref={ref}
      variant={variant}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      id={id}
      optional={optional}
      className={className}
      hiddenLabel={hiddenLabel}
    >
      <TextFieldContext.Provider value={{ includesLegendWithLabel }}>
        {label && (
          <FormLabel
            includesLegendWithLabel={includesLegendWithLabel}
            hidden={hiddenLabel}
            {...slotProps?.label}
          >
            {label}
          </FormLabel>
        )}

        <FormValidationText />

        <Input
          fullWidth={fullWidth}
          inputProps={{ "aria-label": label, maxLength, ...inputProps }}
          {...inputComponentProps}
        />

        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </TextFieldContext.Provider>
    </FormControl>
  );
});

TextField.displayName = "TextField";

export default TextField;
