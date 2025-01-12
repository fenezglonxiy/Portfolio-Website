/** @jsxImportSource @emotion/react */

"use client";

import {
  FilledInput as MUIFilledInput,
  FilledInputProps as MUIFilledInputProps,
  useTheme,
} from "@mui/material";

import getFilledInputCss from "./getFilledInputCss";
import useFormControl from "./useFormControl";
import { InputProps } from "./Input";
import useFormField from "./useFormField";
import { useTextFieldContext } from "./TextFieldContext";

export type FilledInputProps = MUIFilledInputProps & {
  /**
   * Control the border radius of the input.
   * @default "sm"
   */
  borderRadius?: InputProps["borderRadius"];
};

function FilledInput(props: FilledInputProps) {
  const { borderRadius = "sm", color: colorFromProps, ...rest } = props;
  const { color, inputId, helperTextId, validationTextId, filled } =
    useFormControl();
  const { includesLegendWithLabel } = useTextFieldContext();
  const formField = useFormField();
  const theme = useTheme();
  const css = getFilledInputCss(
    theme,
    { ...props, borderRadius },
    { filled, color: colorFromProps || color, includesLegendWithLabel }
  );

  return (
    <MUIFilledInput
      css={css}
      name={formField?.name}
      id={inputId}
      aria-describedby={
        formField?.error
          ? [helperTextId, validationTextId].join(" ")
          : helperTextId
      }
      disableUnderline
      {...rest}
    />
  );
}

export default FilledInput;
