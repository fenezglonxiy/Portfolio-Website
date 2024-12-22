/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";
import React from "react";
import getWorkDetailsHeroTextCss from "./getWorkDetailsHeroTextCss";

export type WorkDetailsHeroTextProps = React.ComponentPropsWithoutRef<"div">;

function WorkDetailsHeroText(props: WorkDetailsHeroTextProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkDetailsHeroTextCss(theme);

  return (
    <div css={css} className={clsx("flow-spacer-y", className)} {...rest} />
  );
}

export default WorkDetailsHeroText;
