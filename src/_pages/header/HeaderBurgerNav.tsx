/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import getHeaderBurgerNavCss from "./getHeaderBurgerNavCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HeaderBurgerNav(props: Props) {
  const theme = useTheme();
  const css = getHeaderBurgerNavCss(theme);

  return <div css={css} {...props} />;
}

export default HeaderBurgerNav;
