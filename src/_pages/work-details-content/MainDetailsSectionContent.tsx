/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import DOMPurify from "dompurify";
import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";

import getMainDetailsSectionContentCss from "./getMainDetailsSectionContentCss";

export type MainDetailsSectionContentProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "color" | "children"
> & {
  children: string | Node;
};

function MainDetailsSectionContent(props: MainDetailsSectionContentProps) {
  const { children, ...rest } = props;
  const theme = useTheme();
  const css = getMainDetailsSectionContentCss(theme);
  const sanitizedChildren = React.useMemo(
    () => ({
      __html: DOMPurify.sanitize(children),
    }),
    [children]
  );

  return (
    <Typography
      component="div"
      variant="body1Medium"
      fontWeight="regular"
      color="neutral-900"
      css={css}
      dangerouslySetInnerHTML={sanitizedChildren}
      {...rest}
    />
  );
}

export default MainDetailsSectionContent;
