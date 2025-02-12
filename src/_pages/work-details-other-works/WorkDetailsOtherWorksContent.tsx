/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkDetailsOtherWorksContentCss from "./getWorkDetailsOtherWorksContentCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkDetailsOtherWorksContent(props: Props) {
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksContentCss(theme);

  return <div css={css} {...props} />;
}

export default WorkDetailsOtherWorksContent;
