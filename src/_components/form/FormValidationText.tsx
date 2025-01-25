/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { useTheme } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

import { Typography, TypographyProps } from "@/_components/Typography";

import useFormField from "./useFormField";
import getValidationTextCss from "./getFormValidationTextCss";
import useFormControl from "./useFormControl";

export type FormValidationTextProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "color"
> & {
  /**
   * Control the variant of the typography.
   * @default "body2"
   */
  variant?: TypographyProps["variant"];

  /**
   * Control the font-weight of the typography.
   * @default "regular"
   */
  fontWeight?: TypographyProps["fontWeight"];

  /**
   * Control the transformation of text.
   */
  transform?: TypographyProps["transform"];
};

const FormValidationText = React.forwardRef(function FormValidationText(
  props: FormValidationTextProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    variant = "caption",
    fontWeight = "regular",
    children,
    ...rest
  } = props;
  const { validationTextId } = useFormControl();
  const formField = useFormField();
  const hasError = !!formField?.error;
  const body = hasError ? formField?.error?.message : children;
  const component = hasError ? "p" : "div";
  const theme = useTheme();
  const css = getValidationTextCss(theme);

  if (!body) {
    return null;
  }

  return (
    <Typography
      ref={ref}
      component={component}
      id={validationTextId}
      variant={variant}
      fontWeight={fontWeight}
      color="error"
      {...rest}
      aria-hidden
    >
      {hasError && (
        <span css={css.errorIcon}>
          <ErrorIcon fontSize="inherit" />
        </span>
      )}
      {body}
    </Typography>
  );
});

FormValidationText.displayName = "FormValidationText";

export default FormValidationText;
