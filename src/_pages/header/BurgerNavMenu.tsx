/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { Menu, MenuProps } from "@/_components/menu";
import { Collapse } from "@/_components/transitions";

import getBurgerNavMenuCss from "./getBurgerNavMenuCss";

type Props = MenuProps;

function BurgerNavMenu(props: Props) {
  const theme = useTheme();
  const css = getBurgerNavMenuCss(theme);

  return (
    <Menu
      css={css}
      TransitionComponent={Collapse}
      transitionDuration={300}
      {...props}
    />
  );
}

export default BurgerNavMenu;
