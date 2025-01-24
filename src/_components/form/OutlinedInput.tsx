/** @jsxImportSource @emotion/react */

"use client";

import {
  OutlinedInput as MUIOutlinedInput,
  OutlinedInputProps as MUIOutlinedInputProps,
  useTheme,
} from "@mui/material";

import getOutlinedInputCss from "./getOutlinedInputCss";
import useFormControl from "./useFormControl";
import { InputProps } from "./Input";
import useFormField from "./useFormField";
import { useTextFieldContext } from "./TextFieldContext";

export type OutlinedInputProps = MUIOutlinedInputProps & {
  /**
   * Control the border radius of the input.
   * @default "sm"
   */
  borderRadius?: InputProps["borderRadius"];
};

function OutlinedInput(props: OutlinedInputProps) {
  const { borderRadius = "sm", color: colorFromProps, ...rest } = props;
  const {
    color,
    hiddenLabel,
    inputId,
    helperTextId,
    validationTextId,
    filled,
  } = useFormControl();
  const { includesLegendWithLabel } = useTextFieldContext();
  const notNotched = hiddenLabel || !includesLegendWithLabel;
  const formField = useFormField();
  const theme = useTheme();
  const css = getOutlinedInputCss(
    theme,
    { ...rest, borderRadius },
    { filled, color: colorFromProps || color, includesLegendWithLabel }
  );

  return (
    <MUIOutlinedInput
      css={css}
      name={formField?.name}
      id={inputId}
      aria-describedby={
        formField?.error
          ? [helperTextId, validationTextId].join(" ")
          : helperTextId
      }
      notched={notNotched ? false : undefined}
      {...rest}
    />
  );
}

export default OutlinedInput;
