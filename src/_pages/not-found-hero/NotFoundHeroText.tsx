/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import getNotFoundHeroTextCss from "./getNotFoundHeroTextCss";

export type NotFoundHeroTextProps = React.ComponentPropsWithoutRef<"div">;

function NotFoundHeroText(props: NotFoundHeroTextProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getNotFoundHeroTextCss(theme);

  return (
    <div className={clsx("flow-spacer-y", className)} css={css} {...rest} />
  );
}

export default NotFoundHeroText;
