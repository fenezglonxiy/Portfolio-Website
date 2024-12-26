import React from "react";
import {
  FormControl as MUIFormControl,
  FormControlProps as MUIFormControlProps,
} from "@mui/material";

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
};

export type FormControlProps = MUIFormControlProps & FormControlBaseProps;

const FormControl = React.forwardRef(function FormControl(
  props: FormControlProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { id: idFromProps, children, optional, ...rest } = props;
  const id = useId(idFromProps);
  const { error } = useFormField();

  return (
    <FormControlContext.Provider value={{ id: id }}>
      <MUIFormControl ref={ref} error={!!error} required={!optional} {...rest}>
        {children}
      </MUIFormControl>
    </FormControlContext.Provider>
  );
});

FormControl.displayName = "FormControl";

export default FormControl;
