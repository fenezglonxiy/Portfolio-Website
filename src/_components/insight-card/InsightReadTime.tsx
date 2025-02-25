/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getInsightReadTimeCss from "./getInsightReadTimeCss";

type Props = React.ComponentPropsWithoutRef<"div"> & {
  children?: string;
};

function InsightReadTime(props: Props) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getInsightReadTimeCss(theme);

  return (
    <div css={css} {...rest}>
      <div></div>
      <span>{children}</span>
    </div>
  );
}

export default InsightReadTime;
