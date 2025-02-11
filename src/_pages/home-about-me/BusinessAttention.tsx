/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getBusinessAttentionCss from "./getBusinessAttentionCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function BusinessAttention(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getBusinessAttentionCss(theme);

  return (
    <div css={css} className={clsx("flow-spacer-y", className)} {...rest} />
  );
}

export default BusinessAttention;
