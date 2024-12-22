/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import getHeaderNavBarCss from "./getHeaderNavbarCss";
import { Link } from "@/_components/Link";

type HeaderNavbarProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Control the list of navigation items to navigate to.
   */
  navList: Array<NavItem>;
};

function HeaderNavbar(props: HeaderNavbarProps) {
  const { navList, ...rest } = props;
  const theme = useTheme();
  const css = getHeaderNavBarCss(theme);

  return (
    <nav css={css.root} {...rest}>
      <ul css={css.navList}>
        {navList.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
