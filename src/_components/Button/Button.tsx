/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { Button as MUIButton, useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import getButtonCss from "./getButtonCss";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    large: true;
  }

  interface ButtonPropsColorOverrides {
    white: true;
    indigo: true;
    slate: true;
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
  variant?: "contained" | "outlined" | "text";

  /**
   * Control the color matching with the variant.
   * It supports the relevant theme colors for this component.
   */
  color?: "primary" | "secondary" | "white" | "indigo" | "slate";

  /**
   * Control the size.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";

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

  /**
   * The `target` HTML Attribute of `<a>` tag. It's only available when `href`
   * prop is specified
   */
  target?: React.HTMLAttributeAnchorTarget;
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
    size = "medium",
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

  const button = (
    <MUIButton
      ref={ref}
      css={css}
      variant={variant}
      size={size}
      color={color}
      startIcon={icon && iconPosition === "start" ? icon : undefined}
      endIcon={icon && iconPosition === "end" ? icon : undefined}
      disableElevation
      disableRipple
      {...rest}
    />
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        {button}
      </Link>
    );
  }

  return button;
});

Button.displayName = "Button";

export default Button;
