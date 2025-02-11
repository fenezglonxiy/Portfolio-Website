/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHeaderContentCss from "./getHeaderContentCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HeaderContent(props: Props) {
  const theme = useTheme();
  const css = getHeaderContentCss(theme);

  return <div css={css} {...props} />;
}

export default HeaderContent;
