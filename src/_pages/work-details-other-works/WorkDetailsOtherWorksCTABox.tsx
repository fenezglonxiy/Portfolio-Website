/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkDetailsOtherWorksCTABoxCss from "./getWorkDetailsOtherWorksCTABoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkDetailsOtherWorksCTABox(props: Props) {
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default WorkDetailsOtherWorksCTABox;
