/** @jsxImportSource @emotion/react */

"use client";

import { NavItem } from "@/types";

import HeaderContent from "./HeaderContent";
import HeaderLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavbar";
import HeaderLetsTalk from "./HeaderLetsTalk";
import HeaderLocalTime from "./HeaderLocalTime";

export type HeaderProps = React.ComponentPropsWithoutRef<"div">;

function Header(props: HeaderProps) {
  const navList: Array<NavItem> = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/works",
      label: "Works",
    },
    {
      href: "/insights",
      label: "Insights",
    },
    {
      href: "/about-me",
      label: "About me",
    },
  ] as const;

  return (
    <header {...props}>
      <HeaderContent>
        <HeaderLogo />

        <HeaderNavbar navList={navList} />

        <HeaderLocalTime />

        <HeaderLetsTalk />
      </HeaderContent>
    </header>
  );
}

export default Header;
