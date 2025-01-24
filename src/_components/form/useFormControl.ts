import { useFormControl as useMUIFormControl } from "@mui/material";

import { useFormControlContext } from "./FormControlContext";

const useFormControl = () => {
  const controlContext = useFormControlContext();
  const muiControl = useMUIFormControl();

  if (!muiControl) {
    throw new Error(
      "FormControl components or Input component should be used within <FormControl>"
    );
  }

  const inputId = controlContext.id && `${controlContext.id}-input`;
  const helperTextId = controlContext.id && `${controlContext.id}-helper-text`;
  const labelId = controlContext.id && `${controlContext.id}-label`;
  const validationTextId =
    controlContext.id && `${controlContext.id}-validation-text`;

  return {
    id: controlContext.id,
    inputId,
    helperTextId,
    labelId,
    validationTextId,
    ...muiControl,
  };
};

export default useFormControl;
