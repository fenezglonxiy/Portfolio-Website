/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getWorksShowcaseContentCss from "./getWorksShowcaseContentCss";
import clsx from "clsx";

export type WorksShowcaseContentProps = React.HTMLAttributes<HTMLDivElement>;

function WorksShowcaseContent(props: WorksShowcaseContentProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorksShowcaseContentCss(theme);

  return (
    <div css={css} className={clsx("flow-spacer-y", className)} {...rest} />
  );
}

export default WorksShowcaseContent;
