/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/_components/Button";
import { Link } from "@/_components/Link";
import { ArrowRight } from "@/_icons";

import HeaderContent from "./HeaderContent";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderLocalTime from "./HeaderLocalTime";
import HeaderContainer from "./HeaderContainer";
import HeaderNavList from "./HeaderNavList";
import HeaderNavListItem from "./HeaderNavListItem";
import getHeaderCss from "./getHeaderCss";

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

  const css = getHeaderCss();

  return (
    <header ref={header} css={css} {...props}>
      <HeaderContent className="app-header-content">
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

            <HeaderLocalTime />

            <div>
              <Button
                href="/contact"
                variant="outlined"
                iconPosition="end"
                icon={<ArrowRight size="sm" />}
                shape="pill"
              >
                Let’s Talk
              </Button>
            </div>
          </HeaderNav>
        </HeaderContainer>
      </HeaderContent>
    </header>
  );
}

export default Header;
