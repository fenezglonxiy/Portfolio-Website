/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getHomeInsightsContainerCss from "./getHomeInsightsContainerCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeInsightsContainer(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getHomeInsightsContainerCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default HomeInsightsContainer;
