/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getWorkServiceBoxProps from "./getWorkServiceBoxCss";

export type WorkServiceBoxProps = React.ComponentPropsWithoutRef<"div">;

function WorkServiceBox(props: WorkServiceBoxProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkServiceBoxProps(theme);

  return (
    <div className={clsx("flow-spacer-x", className)} css={css} {...rest} />
  );
}

export default WorkServiceBox;
