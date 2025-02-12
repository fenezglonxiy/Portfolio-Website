/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getWorkDetailsOtherWorksContainerCss from "./getWorkDetailsOtherWorksContainerCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkDetailsOtherWorksContainer(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksContainerCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default WorkDetailsOtherWorksContainer;
