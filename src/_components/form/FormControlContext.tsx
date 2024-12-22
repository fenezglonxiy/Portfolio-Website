import React from "react";
import { ValidationStatus } from "./types";
import _ from "lodash";

type FormControlContextValue = {
  /**
   * Control main id for form control (input, select, etc).
   */
  id?: string;
};

const FormControlContext = React.createContext<FormControlContextValue>({});

export const useFormControlContext = (
  contextValueFromComponent?: FormControlContextValue
): FormControlContextValue => {
  const value = React.useContext(FormControlContext);

  return _.merge(value, contextValueFromComponent);
};

export default FormControlContext;
