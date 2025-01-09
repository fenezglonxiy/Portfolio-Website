/** @jsxImportSource @emotion/react */

"use client";

import {
  Input as MUIInput,
  InputProps as MUIInputProps,
  useTheme,
} from "@mui/material";

import getStandardInputCss from "./getStandardInputCss";
import useFormControl from "./useFormControl";

export type StandardInputProps = MUIInputProps;

function StandardInput(props: StandardInputProps) {
  const { filled } = useFormControl();
  const theme = useTheme();
  const css = getStandardInputCss(theme, filled);

  return <MUIInput css={css} {...props} />;
}

export default StandardInput;
