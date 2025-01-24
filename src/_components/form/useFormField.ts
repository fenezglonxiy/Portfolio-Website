import { useFormContext } from "react-hook-form";
import _ from "lodash";

import { useFormFieldContext } from "./FormFieldContext";

const useFormField = () => {
  const fieldContext = useFormFieldContext();

  if (_.isEmpty(fieldContext)) {
    return undefined;
  }

  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);

  return {
    name: fieldContext.name,
    ...fieldState,
  };
};

export default useFormField;
