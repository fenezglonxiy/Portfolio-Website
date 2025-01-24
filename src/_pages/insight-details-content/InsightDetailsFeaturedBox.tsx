/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import { Box } from "@/_components/box";

import getInsightDetailsFeaturedBoxCss from "./getInsightDetailsFeaturedBoxCss";

export type InsightDetailsFeaturedBoxProps = {
  /**
   * The element used for the root node.
   * @default "div"
   */
  component?: "div" | "blockquote";

  /**
   * The variant to use.
   * @default "block"
   */
  variant?: "block" | "filled";

  /**
   * The color of the component.
   * @default "zircon"
   */
  color?: "royal-blue" | "zircon";

  /**
   * Control additional class names for the root element.
   */
  className?: string;

  children?: React.ReactNode;
};

function InsightDetailsFeaturedBox(props: InsightDetailsFeaturedBoxProps) {
  const {
    component = "div",
    variant = "block",
    color = "zircon",
    className,
    ...rest
  } = props;
  const theme = useTheme();
  const css = getInsightDetailsFeaturedBoxCss(theme, {
    ...rest,
    variant,
    color,
  });

  return (
    <Box
      component={component}
      className={clsx("flow-spacer-y", className)}
      css={css}
      {...rest}
    />
  );
}

export default InsightDetailsFeaturedBox;
