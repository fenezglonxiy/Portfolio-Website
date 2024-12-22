/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getWorkDetailsContentContainerCss from "./getWorkDetailsContentContainerCss";

export type WorkDetailsContentContainerProps =
  React.ComponentPropsWithoutRef<"div">;

function WorkDetailsContentContainer(props: WorkDetailsContentContainerProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getWorkDetailsContentContainerCss(theme);

  return (
    <div css={css.root} {...rest}>
      <div css={css.inner}>{children}</div>
    </div>
  );
}

export default WorkDetailsContentContainer;
