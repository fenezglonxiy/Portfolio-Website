/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkDetailsOtherWorksHeaderCss from "./getWorkDetailsOtherWorksHeaderCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkDetailsOtherWorksHeader(props: Props) {
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksHeaderCss(theme);

  return <div css={css} {...props} />;
}

export default WorkDetailsOtherWorksHeader;
