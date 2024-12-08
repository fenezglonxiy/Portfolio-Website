/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getHeaderContentCss from "./getHeaderContentCss";

type HeaderContentProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderContent(props: HeaderContentProps) {
  const theme = useTheme();
  const css = getHeaderContentCss(theme);

  return <div css={css.root} {...props} />;
}

export default HeaderContent;
