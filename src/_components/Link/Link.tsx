/** @jsxImportSource @emotion/react */

"use client";

import { OverrideProps } from "@mui/material/OverridableComponent";
import { default as NextLink } from "next/link";
import React from "react";
import { Url } from "next/dist/shared/lib/router/router";
import { useTheme } from "@mui/material";

import { TypographyProps } from "@/_components/Typography";

import getLinkCss from "./getLinkCss";

type LinkBaseProps = {
  /**
   * The url to navigate to.
   */
  href: Url;

  /**
   * Control the display style.
   * @default "inline"
   */
  display?: "inline" | "inline-block" | "block";

  /**
   * Control the variant.
   * @default "body2Medium"
   */
  variant?: TypographyProps["variant"];

  /**
   * Control the color.
   * It supports the relevant theme colors for this component.
   * @default "primary"
   */
  color?: "inherit" | "primary" | "secondary";

  /**
   * Control when the link should have an underline.
   * @default "none"
   */
  underline?: "always" | "active" | "hover" | "none";
};

export interface LinkTypeMap<D extends React.ElementType = "a"> {
  props: LinkBaseProps;
  defaultComponent: D;
}

export type LinkProps<
  D extends React.ElementType = LinkTypeMap["defaultComponent"]
> = OverrideProps<LinkTypeMap<D>, D>;

const Link = React.forwardRef(
  (props: LinkProps, ref: React.Ref<HTMLAnchorElement>) => {
    const {
      href,
      display = "inline",
      variant = "body2Medium",
      color = "primary",
      underline = "none",
      ...rest
    } = props;

    const theme = useTheme();
    const css = getLinkCss(theme, {
      ...props,
      display,
      variant,
      color,
      underline,
    });

    return (
      <NextLink ref={ref} href={href} passHref legacyBehavior>
        <a css={css} {...rest} />
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export default Link;
