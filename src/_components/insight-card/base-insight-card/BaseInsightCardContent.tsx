/** @jsxImportSource @emotion/react */

"use client";

import { CardContent, CardContentProps } from "@/_components/Card";
import { useTheme } from "@mui/material";
import clsx from "clsx";
import getBaseInsightCardContentCss from "./getBaseInsightCardContentCss";

export type BaseInsightCardContentProps = CardContentProps;

function BaseInsightCardContent(props: BaseInsightCardContentProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getBaseInsightCardContentCss(theme);

  return (
    <CardContent
      className={clsx("flow-spacer-y", className)}
      css={css}
      {...rest}
    />
  );
}

export default BaseInsightCardContent;
