/** @jsxImportSource @emotion/react */

"use client";

import clsx from "clsx";

import getOtherInsightsContainerCss from "./getOtherInsightsContainerCss";
import { useTheme } from "@mui/material";

export type OtherInsightsContainerProps = React.ComponentPropsWithoutRef<"div">;

function OtherInsightsContainer(props: OtherInsightsContainerProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getOtherInsightsContainerCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default OtherInsightsContainer;
