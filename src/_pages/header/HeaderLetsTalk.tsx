/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHeaderLetsTalkCss from "./getHeaderLetsTalkCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HeaderLetsTalk(props: Props) {
  const theme = useTheme();
  const css = getHeaderLetsTalkCss(theme);

  return <div css={css} {...props} />;
}

export default HeaderLetsTalk;
