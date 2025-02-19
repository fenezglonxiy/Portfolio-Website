/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@mui/material";

import { Button } from "@/_components/Button";
import { Link } from "@/_components/Link";
import { ArrowRight } from "@/_icons";
import usePopupState, { bindMenu, bindTrigger } from "@/_hooks/usePopupState";

import HeaderContent from "./HeaderContent";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderLocalTime from "./HeaderLocalTime";
import HeaderContainer from "./HeaderContainer";
import HeaderNavList from "./HeaderNavList";
import HeaderNavListItem from "./HeaderNavListItem";
import getHeaderCss from "./getHeaderCss";
import HeaderLetsTalk from "./HeaderLetsTalk";
import HeaderBurgerNav from "./HeaderBurgerNav";
import BurgerNavMenu from "./BurgerNavMenu";
import BurgerNavMenuItem from "./BurgerNavMenuItem";
import BurgerNavMenuLink from "./BurgerNavMenuLink";

gsap.registerPlugin(ScrollTrigger);

type Props = React.ComponentPropsWithoutRef<"header">;

function Header(props: Props) {
  const header = React.useRef(null);

  useGSAP(
    () => {
      const popDownAnimation = gsap
        .from(".app-header-content", {
          yPercent: -100,
          paused: true,
          duration: 0.1,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (self.direction === -1) {
            popDownAnimation.play();
          } else {
            popDownAnimation.reverse();
          }
        },
      });
    },
    { scope: header }
  );

  const navList = [
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

  const menuState = usePopupState({ variant: "menu" });

  const handleBurgerNavMenuItemClick = () => menuState.close();

  const theme = useTheme();
  const css = getHeaderCss(theme);

  return (
    <header ref={header} css={css} {...props}>
      <HeaderContent
        className="app-header-content"
        data-burger-nav-menu-opened={menuState.isOpen}
      >
        <HeaderContainer>
          <HeaderNav>
            <HeaderLogo />

            <HeaderNavList>
              {navList.map((item, idx) => (
                <HeaderNavListItem key={idx}>
                  <Link href={item.href}>{item.label}</Link>
                </HeaderNavListItem>
              ))}
            </HeaderNavList>

            <HeaderLetsTalk>
              <HeaderLocalTime />

              <Button
                href="/contact"
                variant="outlined"
                color={menuState.isOpen ? "white" : "primary"}
                iconPosition="end"
                shape="pill"
                icon={<ArrowRight size="sm" />}
              >
                Let’s Talk
              </Button>
            </HeaderLetsTalk>

            <HeaderBurgerNav>
              <Button
                variant="outlined"
                shape="pill"
                color={menuState.isOpen ? "white" : "primary"}
                {...bindTrigger(menuState)}
              >
                <i className="fa-sharp fa-light fa-bars"></i>
              </Button>

              <BurgerNavMenu {...bindMenu(menuState)}>
                {navList.map((item, idx) => (
                  <BurgerNavMenuItem
                    key={idx}
                    onClick={handleBurgerNavMenuItemClick}
                  >
                    <BurgerNavMenuLink href={item.href}>
                      {item.label}
                    </BurgerNavMenuLink>
                  </BurgerNavMenuItem>
                ))}
              </BurgerNavMenu>
            </HeaderBurgerNav>
          </HeaderNav>
        </HeaderContainer>
      </HeaderContent>
    </header>
  );
}

export default Header;
