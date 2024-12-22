/** @jsxImportSource @emotion/react */

"use client";

import { CardContent, CardContentProps } from "@/_components/Card";
import { useTheme } from "@mui/material";
import getWorkShowcaseCardContentCss from "./getWorkShowcaseCardContentCss";
import clsx from "clsx";

export type WorkShowcaseCardContentProps = CardContentProps;

function WorkShowcaseCardContent(props: WorkShowcaseCardContentProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkShowcaseCardContentCss(theme);

  return (
    <CardContent
      className={clsx("flow-spacer-y", className)}
      css={css}
      {...rest}
    />
  );
}

export default WorkShowcaseCardContent;
