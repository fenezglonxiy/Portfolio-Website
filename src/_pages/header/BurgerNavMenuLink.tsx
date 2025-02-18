/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";

import { Link } from "@/_components/Link";

import getBurgerNavMenuLinkCss from "./getBurgerNavMenuLinkCss";

type Props = Omit<React.ComponentPropsWithoutRef<"a">, "color"> & {
  href: Url;
};

function BurgerNavMenuLink(props: Props) {
  const theme = useTheme();
  const css = getBurgerNavMenuLinkCss(theme);

  return <Link css={css} color="inherit" {...props} />;
}

export default BurgerNavMenuLink;
