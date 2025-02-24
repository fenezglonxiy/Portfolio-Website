/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getWorkServiceBoxProps from "./getWorkServiceBoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkServiceBox(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkServiceBoxProps(theme);

  return (
    <div className={clsx("flow-spacer-x", className)} css={css} {...rest} />
  );
}

export default WorkServiceBox;
