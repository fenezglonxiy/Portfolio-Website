/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getWorkBusinessSectorBoxProps from "./getWorkBusinessSectorBoxCss";

export type WorkBusinessSectorBoxProps = React.ComponentPropsWithoutRef<"div">;

function WorkBusinessSectorBox(props: WorkBusinessSectorBoxProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkBusinessSectorBoxProps(theme);

  return (
    <div className={clsx("flow-spacer-x", className)} css={css} {...rest} />
  );
}

export default WorkBusinessSectorBox;
