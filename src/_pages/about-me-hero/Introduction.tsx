/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getIntroductionCss from "./getIntroductionCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function Introduction(props: Props) {
  const theme = useTheme();
  const css = getIntroductionCss(theme);

  return <div css={css} {...props} />;
}

export default Introduction;
