/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getOtherInsightsCTABoxCss from "./getOtherInsightsCTABoxCss";

export type OtherInsightsCTABoxProps = React.ComponentPropsWithoutRef<"div">;

function OtherInsightsCTABox(props: OtherInsightsCTABoxProps) {
  const theme = useTheme();
  const css = getOtherInsightsCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default OtherInsightsCTABox;
