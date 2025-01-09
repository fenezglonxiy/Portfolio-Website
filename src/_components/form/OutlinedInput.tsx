/** @jsxImportSource @emotion/react */

"use client";

import {
  OutlinedInput as MUIOutlinedInput,
  OutlinedInputProps as MUIOutlinedInputProps,
  useTheme,
} from "@mui/material";

import getOutlinedInputCss from "./getOutlinedInputCss";
import useFormControl from "./useFormControl";

export type OutlinedInputProps = MUIOutlinedInputProps;

function OutlinedInput(props: OutlinedInputProps) {
  const { filled } = useFormControl();
  const theme = useTheme();
  const css = getOutlinedInputCss(theme, filled as boolean);

  return <MUIOutlinedInput css={css} {...props} />;
}

export default OutlinedInput;
