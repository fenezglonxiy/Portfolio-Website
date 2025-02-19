/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getStrengthsCss from "./getStrengthsCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function Strengths(props: Props) {
  const theme = useTheme();
  const css = getStrengthsCss(theme);

  return <div css={css} {...props} />;
}

export default Strengths;
