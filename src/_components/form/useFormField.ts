import { useFormContext } from "react-hook-form";
import { useFormFieldContext } from "./FormFieldContext";
import { useFormControlContext } from "./FormControlContext";

const useFormField = () => {
  const fieldContext = useFormFieldContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const controlContext = useFormControlContext();

  if (!controlContext) {
    throw new Error(
      "useFormControlContext should be used within <FormControl>"
    );
  }

  const helperTextId = `${controlContext}-helper-text`;
  const labelId = `${controlContext}-label`;
  const validationTextId = `${controlContext}-validation-text`;
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);

  return {
    name: fieldContext.name,
    id: controlContext.id,
    helperTextId,
    labelId,
    validationTextId,
    ...fieldState,
  };
};

export default useFormField;
