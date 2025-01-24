/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";
import getInsightDetailsFeaturedBoxTitleCss from "./getInsightDetailsFeaturedBoxTitleCss";

export type InsightDetailsFeaturedBoxTitleProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "color"
> & {
  /**
   * Control the icon to render next to the title.
   */
  icon?: React.ReactNode;

  /**
   * Control the position of the icon.
   * @default "start"
   */
  iconPosition?: "start" | "end";

  /**
   * The color of the title.
   * @default "zircon"
   */
  color?: "zircon" | "royal-blue";
};

function InsightDetailsFeaturedBoxTitle(
  props: InsightDetailsFeaturedBoxTitleProps
) {
  const {
    icon,
    iconPosition = "start",
    color = "zircon",
    children,
    ...rest
  } = props;
  const theme = useTheme();
  const css = getInsightDetailsFeaturedBoxTitleCss(theme, { ...rest, color });

  return (
    <Typography component="div" variant="h6" css={css} {...rest}>
      {icon && iconPosition === "start" && <span>{icon}</span>}

      <Typography component="h4" variant="inherit">
        {children}
      </Typography>

      {icon && iconPosition === "end" && <span>{icon}</span>}
    </Typography>
  );
}

export default InsightDetailsFeaturedBoxTitle;
