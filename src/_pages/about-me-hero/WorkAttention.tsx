/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkAttentionCss from "./getWorkAttentionCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkAttention(props: Props) {
  const theme = useTheme();
  const css = getWorkAttentionCss(theme);

  return <div css={css} {...props} />;
}

export default WorkAttention;
