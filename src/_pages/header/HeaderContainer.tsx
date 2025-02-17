/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHeaderContainerCss from "./getHeaderContainerCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HeaderContainer(props: Props) {
  const theme = useTheme();
  const css = getHeaderContainerCss(theme);

  return <div css={css} {...props} />;
}

export default HeaderContainer;
