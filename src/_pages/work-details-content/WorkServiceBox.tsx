/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkServiceBoxCss from "./getWorkServiceBoxCss";

export type WorkServiceBoxProps = React.ComponentPropsWithoutRef<"div">;

function WorkServiceBox(props: WorkServiceBoxProps) {
  const theme = useTheme();
  const css = getWorkServiceBoxCss(theme);

  return <div css={css} {...props} />;
}

export default WorkServiceBox;
