/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getOtherInsightsShowcaseCss from "./getOtherInsightsShowcaseCss";

export type OtherInsightsShowcaseProps = React.ComponentPropsWithoutRef<"div">;

function OtherInsightsShowcase(props: OtherInsightsShowcaseProps) {
  const theme = useTheme();
  const css = getOtherInsightsShowcaseCss(theme);

  return <div css={css} {...props} />;
}

export default OtherInsightsShowcase;
