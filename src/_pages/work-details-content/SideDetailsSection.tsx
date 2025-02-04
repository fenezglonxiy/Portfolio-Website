/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getSideDetailsSectionCss from "./getSideDetailsSectionCss";

export type SideDetailsSectionProps = React.ComponentPropsWithoutRef<"li">;

function SideDetailsSection(props: SideDetailsSectionProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getSideDetailsSectionCss(theme);

  return <li className={clsx("flow-spacer-y", className)} {...rest} />;
}

export default SideDetailsSection;
