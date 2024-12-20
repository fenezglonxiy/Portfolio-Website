import React from "react";
import FormControl, { FormControlBaseProps } from "./FormControl";
import Input, { InputProps } from "./Input";
import FormLabel from "./FormLabel";
import FormHelperText from "./FormHelperText";
import FormValidationText from "./FormValidationText";

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
   * Control additional class names for the root element.
   */
  className?: string;

  /**
   * Control the helper text for the field.
   */
  helperText?: string;
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
    | "placeholder"
    | "autoFocus"
    | "autoComplete"
    | "multiline"
    | "className"
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
    className,
    ...inputComponentProps
  } = props;

  return (
    <FormControl
      ref={ref}
      disabled={disabled}
      fullWidth={fullWidth}
      id={id}
      optional={optional}
      className={className}
    >
      {label && <FormLabel>{label}</FormLabel>}

      <FormValidationText />

      <Input
        fullWidth={fullWidth}
        {...inputComponentProps}
        inputProps={{ "aria-label": label, maxLength, ...inputProps }}
      />

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

TextField.displayName = "TextField";

export default TextField;
