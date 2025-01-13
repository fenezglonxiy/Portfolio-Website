import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";
import { FormHelperText as MUIFormHelperText } from "@mui/material";

import useFormControl from "./useFormControl";

type FormHelperTextBaseProps = {};

export interface FormHelperTextTypeMap<D extends React.ElementType = "div"> {
  props: FormHelperTextBaseProps;
  defaultComponent: D;
}

export type FormHelperTextProps<
  D extends React.ElementType = FormHelperTextTypeMap["defaultComponent"]
> = OverrideProps<FormHelperTextTypeMap<D>, D>;

const FormHelperText = React.forwardRef(function (
  props: FormHelperTextProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { helperTextId } = useFormControl();

  return <MUIFormHelperText ref={ref} {...props} id={helperTextId} />;
});

FormHelperText.displayName = "FormHelperText";

export default FormHelperText;
