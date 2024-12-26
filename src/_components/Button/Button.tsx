/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { Button as MUIButton, useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import getButtonCss from "./getButtonCss";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    ghost: true;
  }
}

type ButtonBaseProps = {
  /**
   * The icon to render next to the button text.
   * @default undefined
   */
  icon?: React.ReactNode;

  /**
   * The position of the icon.
   * @default "end"
   */
  iconPosition?: "start" | "end";

  /**
   * Control the variant.
   * @default "contained"
   */
  variant?: "contained" | "outlined" | "ghost";

  /**
   * Control the color matching with the variant.
   * It supports the relevant theme colors for this component.
   */
  color?: "primary" | "secondary";

  /**
   * Control the size.
   * @default "sm"
   */
  size?: "sm" | "md";

  /**
   * Control the shape.
   * @default "rounded"
   */
  shape?: "rounded" | "pill" | "circle";

  /**
   * Control whether the button should take the full width of the container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * A URL or path to navigate to.
   */
  href?: Url;
};

export interface ButtonTypeMap<D extends React.ElementType = "button"> {
  props: ButtonBaseProps;
  defaultComponent: D;
}

export type ButtonProps<
  D extends React.ElementType = ButtonTypeMap["defaultComponent"]
> = OverrideProps<ButtonTypeMap<D>, D> & { component?: React.ElementType };

const Button = React.forwardRef(function Button(
  props: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const {
    icon,
    iconPosition = "start",
    size = "sm",
    color = "primary",
    variant = "contained",
    fullWidth = false,
    shape = "rounded",
    href,
    ...rest
  } = props;
  const theme = useTheme();
  const css = getButtonCss(theme, {
    ...props,
    size,
    color,
    variant,
    fullWidth,
    shape,
  });

  const Button = (
    <MUIButton
      ref={ref}
      variant={variant}
      css={css}
      startIcon={icon && iconPosition === "start" ? icon : undefined}
      endIcon={icon && iconPosition === "end" ? icon : undefined}
      disableElevation
      disableRipple
      {...rest}
    />
  );

  return href ? (
    <Link href={href} passHref legacyBehavior>
      {Button}
    </Link>
  ) : (
    Button
  );
});

Button.displayName = "Button";

export default Button;
