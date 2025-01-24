/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getOtherInsightsContentCss from "./getOtherInsightsContentCss";

export type OtherInsightsContentProps = React.ComponentPropsWithoutRef<"div">;

function OtherInsightsContent(props: OtherInsightsContentProps) {
  const theme = useTheme();
  const css = getOtherInsightsContentCss(theme);

  return <div css={css} {...props} />;
}

export default OtherInsightsContent;
