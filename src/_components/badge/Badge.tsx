/** @jsxImportSource @emotion/react */

"use client";

import { Badge as MUIBadge, useTheme } from "@mui/material";
import { OverrideProps } from "@mui/material/OverridableComponent";
import React from "react";

import getBadgeCss from "./getBadgeCss";

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    indigo: true;
  }
}

type BadgeBaseProps = {
  /**
   * The anchor of the badge.
   */
  anchorOrigin?: {
    /**
     * The horizontal anchor of the badge.
     * @default "right"
     */
    horizontal?: "left" | "right";

    /**
     * The vertical anchor of the badge.
     * @default "top"
     */
    vertical?: "top" | "bottom";
  };

  /**
   * The variant to use.
   * @default "standard"
   */
  variant?: "dot" | "standard";

  /**
   * The color of the badge.
   * @default "default"
   */
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "indigo";

  /**
   * If `true`, the badge is invisible.
   */
  invisible?: boolean;

  /**
   * Max count to show.
   */
  max?: number;

  /**
   * Wrapped shape the badge should overlap.
   * @default "rectangular"
   */
  overlap?: "rectangular" | "circular";

  /**
   * If `true`, the badge content is hidden if it is zero.
   */
  showZero?: boolean;

  /**
   * The content rendered within the badge.
   */
  badgeContent?: React.ReactNode;

  /**
   * The badge will be added relative to this node.
   */
  children?: React.ReactNode;
};

export interface BadgeTypeMap<D extends React.ElementType = "div"> {
  props: BadgeBaseProps;
  defaultComponent: D;
}

export type BadgeProps<
  D extends React.ElementType = BadgeTypeMap["defaultComponent"]
> = OverrideProps<BadgeTypeMap<D>, D>;

const Badge = React.forwardRef(function Badge(
  props: BadgeProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    anchorOrigin = {
      horizontal: "right",
      vertical: "top",
    },
    variant = "standard",
    color = "default",
    overlap = "rectangular",
    ...rest
  } = props;
  const theme = useTheme();
  const css = getBadgeCss(theme);

  return (
    <MUIBadge
      ref={ref}
      css={css}
      anchorOrigin={anchorOrigin}
      variant={variant}
      color={color}
      overlap={overlap}
      {...rest}
    />
  );
});

Badge.displayName = "Badge";

export default Badge;
