/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getHomeSelectedWorksContainerCss from "./getHomeSelectedWorksContainerCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeSelectedWorksContainer(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getHomeSelectedWorksContainerCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default HomeSelectedWorksContainer;
