/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getHomeAboutMeContainerCss from "./getHomeAboutMeContainerCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeAboutMeContainer(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getHomeAboutMeContainerCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default HomeAboutMeContainer;
