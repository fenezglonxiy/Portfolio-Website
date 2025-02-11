/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getWorksShowcaseContentCss from "./getWorksShowcaseContentCss";

type Props = React.HTMLAttributes<HTMLDivElement>;

function WorksShowcaseContent(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorksShowcaseContentCss(theme);

  return (
    <div css={css} className={clsx("flow-spacer-y", className)} {...rest} />
  );
}

export default WorksShowcaseContent;
