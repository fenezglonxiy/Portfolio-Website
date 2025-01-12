/** @jsxImportSource @emotion/react */

"use client";

import {
  Input as MUIInput,
  InputProps as MUIInputProps,
  useTheme,
} from "@mui/material";

import getStandardInputCss from "./getStandardInputCss";
import useFormControl from "./useFormControl";
import { useTextFieldContext } from "./TextFieldContext";
import useFormField from "./useFormField";

export type StandardInputProps = MUIInputProps;

function StandardInput(props: StandardInputProps) {
  const { color: colorFromProps, ...rest } = props;
  const { color, inputId, helperTextId, validationTextId, filled } =
    useFormControl();
  const { includesLegendWithLabel } = useTextFieldContext();
  const formField = useFormField();
  const theme = useTheme();
  const css = getStandardInputCss(theme, props, {
    filled,
    color: colorFromProps || color,
    includesLegendWithLabel,
  });

  return (
    <MUIInput
      css={css}
      name={formField?.name}
      id={inputId}
      aria-describedby={
        formField?.error
          ? [helperTextId, validationTextId].join(" ")
          : helperTextId
      }
      {...rest}
    />
  );
}

export default StandardInput;
