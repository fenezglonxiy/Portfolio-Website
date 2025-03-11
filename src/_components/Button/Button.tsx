/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { Button as MUIButton, useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/navigation";
import { pageTransitionRoute } from "@/_pages/page-transition";

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
    onClick,
    ...rest
  } = props;
  const router = useRouter();

  const theme = useTheme();
  const css = getButtonCss(theme, {
    ...props,
    size,
    color,
    variant,
    fullWidth,
    shape,
  });

  const muiButtonComponentProps = {
    ref,
    css,
    variant,
    size,
    color,
    startIcon: icon && iconPosition === "start" ? icon : undefined,
    endIcon: icon && iconPosition === "end" ? icon : undefined,
    disableElevation: true,
    disableRipple: true,
    ...rest,
  };

  if (href) {
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault();
      pageTransitionRoute(router, href);

      if (onClick) {
        onClick(event);
      }
    };

    return (
      <Link href={href} passHref legacyBehavior>
        <MUIButton {...muiButtonComponentProps} onClick={handleClick} />
      </Link>
    );
  }

  return <MUIButton {...muiButtonComponentProps} onClick={onClick} />;
});

Button.displayName = "Button";

export default Button;
