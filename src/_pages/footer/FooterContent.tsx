/** @jsxImportSource @emotion/react */

"use client";

import React from "react";

import getFooterContentCss from "./getFooterContentCss";

export type FooterContentProps = React.ComponentPropsWithoutRef<"div">;

function FooterContent(props: FooterContentProps) {
  const css = getFooterContentCss();

  return <div css={css} {...props} />;
}

export default FooterContent;
