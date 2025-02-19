/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { MenuItem, MenuItemProps } from "@/_components/menu";

import getBurgerNavMenuItemCss from "./getBurgerNavMenuItemCss";

type Props = MenuItemProps;

function BurgerNavMenuItem(props: Props) {
  const theme = useTheme();
  const css = getBurgerNavMenuItemCss(theme);

  return <MenuItem css={css} {...props} />;
}

export default BurgerNavMenuItem;
