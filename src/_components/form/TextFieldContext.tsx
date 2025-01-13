import React from "react";

import { TextFieldProps } from "./TextField";

type TextFieldContextValue = {
  /**
   * Control whether to add additional display behavior to label.
   */
  includesLegendWithLabel?: TextFieldProps["includesLegendWithLabel"];
};

const TextFieldContext = React.createContext<TextFieldContextValue>(
  {} as TextFieldContextValue
);

export const useTextFieldContext = (): TextFieldContextValue => {
  const contextValue = React.useContext(TextFieldContext);

  return contextValue;
};

export default TextFieldContext;
