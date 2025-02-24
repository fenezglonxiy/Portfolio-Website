/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkDetailsOtherWorksHeaderCTABoxCss from "./getWorkDetailsOtherWorksHeaderCTABoxCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkDetailsOtherWorksHeaderCTABox(props: Props) {
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksHeaderCTABoxCss(theme);

  return <div css={css} {...props} />;
}

export default WorkDetailsOtherWorksHeaderCTABox;
