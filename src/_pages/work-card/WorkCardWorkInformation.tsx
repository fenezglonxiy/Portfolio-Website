/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";
import getWorkCardWorkInformationCss from "./getWorkCardWorkInformationCss";

export type WorkCardWorkInformationProps = React.HTMLAttributes<HTMLDivElement>;

function WorkCardWorkInformation(props: WorkCardWorkInformationProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkCardWorkInformationCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default WorkCardWorkInformation;
