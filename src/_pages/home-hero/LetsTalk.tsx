/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getLetsTalkCss from "./getLetsTalkCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function LetsTalk(props: Props) {
  const theme = useTheme();
  const css = getLetsTalkCss(theme);

  return <div css={css} {...props} />;
}

export default LetsTalk;
