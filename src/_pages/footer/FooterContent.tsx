/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getFooterContentCss from "./getFooterContentCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function FooterContent(props: Props) {
  const theme = useTheme();
  const css = getFooterContentCss(theme);

  return <div css={css} {...props} />;
}

export default FooterContent;
