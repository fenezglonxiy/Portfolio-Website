import React from "react";
import { FormControl as MUIFormControl } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";

import { useId } from "@/_hooks";

import FormControlContext from "./FormControlContext";
import useFormField from "./useFormField";

export type FormControlBaseProps = {
  /**
   * Unique `id` attribute for the form control element.
   * Form control element can be `input`, `select`, etc.
   */
  id?: string;

  /**
   * Control whether form control is disabled.
   */
  disabled?: boolean;

  /**
   * Control whether form control should take full width of its container.
   */
  fullWidth?: boolean;

  /**
   * Mark form control as optional.
   * All form controls are mandatory by default.
   */
  optional?: boolean;

  /**
   * If `true`, the label is hidden.
   */
  hiddenLabel?: boolean;

  /**
   * The variant to use.
   * @default "outlined"
   */
  variant?: "filled" | "outlined" | "standard";

  /**
   * The size of the form control.
   * @default "medium"
   */
  size?: "small" | "medium";

  /**
   * The color of the form control.
   * @default "primary"
   */
  color?: "primary";
};

export interface FormControlTypeMap<D extends React.ElementType = "div"> {
  props: FormControlBaseProps;
  defaultComponent: D;
}

export type FormControlProps<
  D extends React.ElementType = FormControlTypeMap["defaultComponent"]
> = OverrideProps<FormControlTypeMap<D>, D>;

const FormControl = React.forwardRef(function FormControl(
  props: FormControlProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    id: idFromProps,
    children,
    optional,
    variant = "outlined",
    size = "medium",
    color = "primary",
    ...rest
  } = props;
  const id = useId(idFromProps);
  const formField = useFormField();

  return (
    <MUIFormControl
      ref={ref}
      variant={variant}
      size={size}
      color={color}
      id={id}
      error={!!formField?.error}
      required={!optional}
      {...rest}
    >
      <FormControlContext.Provider value={{ id: id }}>
        {children}
      </FormControlContext.Provider>
    </MUIFormControl>
  );
});

FormControl.displayName = "FormControl";

export default FormControl;
