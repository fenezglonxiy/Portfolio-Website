import { useFormContext } from "react-hook-form";
import _ from "lodash";

import { useFormFieldContext } from "./FormFieldContext";

const useFormField = () => {
  const fieldContext = useFormFieldContext();
  const formContext = useFormContext();

  if (_.isEmpty(fieldContext)) {
    return undefined;
  }

  if (!formContext) {
    return undefined;
  }

  const fieldState = formContext.getFieldState(
    fieldContext.name,
    formContext.formState
  );

  return {
    name: fieldContext.name,
    ...fieldState,
  };
};

export default useFormField;
