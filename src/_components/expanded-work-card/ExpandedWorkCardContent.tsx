/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import { CardContent, CardContentProps } from "@/_components/Card";

import getExpandedWorkCardContentCss from "./getExpandedWorkCardContentCss";

type Props = CardContentProps;

function ExpandedWorkCardContent(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getExpandedWorkCardContentCss(theme);

  return (
    <CardContent
      className={clsx("flow-spacer-y", className)}
      css={css}
      {...rest}
    />
  );
}

export default ExpandedWorkCardContent;
