/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getWorkDetailsOtherWorksShowcaseCss from "./getWorkDetailsOtherWorksShowcaseCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkDetailsOtherWorksShowcase(props: Props) {
  const theme = useTheme();
  const css = getWorkDetailsOtherWorksShowcaseCss(theme);

  return <div css={css} {...props} />;
}

export default WorkDetailsOtherWorksShowcase;
