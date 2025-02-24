/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getWorkSectionCss from "./getWorkSectionCss";

type Props = React.ComponentPropsWithoutRef<"section">;

function WorkSection(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkSectionCss(theme);

  return (
    <section className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default WorkSection;
