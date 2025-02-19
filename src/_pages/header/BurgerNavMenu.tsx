/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { useTheme } from "@mui/material";

import { Menu, MenuProps } from "@/_components/menu";
import { Slide } from "@/_components/transitions";

import getBurgerNavMenuCss from "./getBurgerNavMenuCss";

type Props = MenuProps;

function BurgerNavMenu(props: Props) {
  const theme = useTheme();
  const css = getBurgerNavMenuCss(theme);

  return (
    <Menu
      css={css}
      TransitionComponent={Slide}
      transitionDuration={300}
      TransitionProps={{
        direction: "down",
      }}
      {...props}
    />
  );
}

export default BurgerNavMenu;
