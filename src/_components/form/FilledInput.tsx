/** @jsxImportSource @emotion/react */

"use client";

import {
  FilledInput as MUIFilledInput,
  FilledInputProps as MUIFilledInputProps,
  useTheme,
} from "@mui/material";

import getFilledInputCss from "./getFilledInputCss";
import useFormControl from "./useFormControl";

export type FilledInputProps = MUIFilledInputProps;

function FilledInput(props: FilledInputProps) {
  const { filled } = useFormControl();
  const theme = useTheme();
  const css = getFilledInputCss(theme, filled as boolean);

  return <MUIFilledInput css={css} {...props} />;
}

export default FilledInput;
