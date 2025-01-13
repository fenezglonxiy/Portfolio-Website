/** @jsxImportSource @emotion/react */

"use client";

import { InputBaseComponentProps, useTheme } from "@mui/material";
import React from "react";
import { ThemeOptions } from "@mui/material/styles";

import FilledInput from "./FilledInput";
import useFormControl from "./useFormControl";
import StandardInput from "./StandardInput";
import OutlinedInput from "./OutlinedInput";

declare module "@mui/material/InputBase" {
  interface InputBasePropsColorOverrides {
    black: true;
    indigo: true;
  }
}

export type InputProps = {
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * Learn more by reading the [spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete?: string;

  /**
   * Control whether the input should be focused during first mount.
   */
  autoFocus?: boolean;

  /**
   * Control the border radius of the input.
   * @default "sm"
   */
  borderRadius?: keyof Pick<
    NonNullable<ThemeOptions["shape"]>,
    "none" | "sm" | "md" | "lg" | "pill"
  >;

  /**
   * Control the input default value.
   * Use when the component is not controlled.
   */
  defaultValue?: unknown;

  /**
   * Control whether the input should be disabled.
   */
  disabled?: boolean;

  /**
   * Control whether the input is in an error state.
   */
  error?: boolean;

  /**
   * Control the input prefix adornment.
   * Could be text, icon, etc.
   */
  startAdornment?: React.ReactNode;

  /**
   * Control the input suffix adornment.
   * Could be text, icon, etc.
   */
  endAdornment?: React.ReactNode;

  /**
   * Control whether the input should take full width of its container.
   */
  fullWidth?: boolean;

  /**
   * Control the `id` HTML attribute value of the input.
   */
  id?: string;

  /**
   * Control the `name` HTML attribute value of the input.
   */
  name?: string;

  /**
   * The component used for `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent?: React.ElementType<InputBaseComponentProps>;

  /**
   * Control additional input element props.
   * Use it to set `step` for number input type.
   */
  inputProps?: InputBaseComponentProps & { maxLength?: string | number };

  /**
   * The ref passed to the `input` element.
   */
  inputRef?: React.Ref<unknown>;

  /**
   * Control placeholder text for the input element.
   */
  placeholder?: string;

  /**
   * Control whether a user can change input value.
   * Input element can be still focused and value can be copied.
   */
  readOnly?: boolean;

  /**
   * Control whether an input is required.
   */
  required?: boolean;

  /**
   * Control whether an input should be a multiline input.
   * If `true`, the input element will be rendered as a `text-area` element.
   */
  multiline?: boolean;

  /**
   * Control the number of rows.
   * Works only when `multiline` prop is set to `true`.
   */
  rows?: number;

  /**
   * Control the minimum number of rows.
   * Works only when `multiline` prop is set to `true`.
   */
  minRows?: number;

  /**
   * Control the maximum number of rows.
   * Works only when `multiline` prop is set to `true`.
   */
  maxRows?: number;

  /**
   * Control input `type` HTML attribute value.
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
   * @default "text"
   */
  type?: React.HTMLInputTypeAttribute;

  /**
   * Control the value of the input.
   * Required for a controlled component.
   */
  value?: unknown;

  /**
   * Control the additional class name of the input element.
   */
  className?: string;

  /**
   * Callback fired when the input is blurred.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;

  /**
   * Callback fired when the input is focused.
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;

  /**
   * Callback fired when any key on the keyboard is pressed while the input is
   * focused.
   */
  onKeyDown?: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;

  /**
   * Callback fired when any key on the keyboard is released while the input is
   * focused.
   */
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;

  /**
   * Callback fired when the input value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const Input = React.forwardRef(function Input(
  props: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const { borderRadius = "sm", ...rest } = props;
  const { variant, color } = useFormControl();
  const componentProps = {
    ref,
    color,
    label: props.inputProps?.["aria-label"],
    ...rest,
  };

  if (variant === "outlined") {
    return <OutlinedInput borderRadius={borderRadius} {...componentProps} />;
  }

  if (variant === "filled") {
    return <FilledInput borderRadius={borderRadius} {...componentProps} />;
  }

  return <StandardInput {...componentProps} />;
});

Input.displayName = "Input";

export default Input;
