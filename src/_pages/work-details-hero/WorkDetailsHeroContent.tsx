/** @jsxImportSource @emotion/react */

"use client";

import { HeroContent, HeroContentProps } from "@/_components/hero";

import getWorkDetailsHeroContentCss from "./getWorkDetailsHeroContentCss";

export type WorkDetailsHeroContentProps = HeroContentProps;

function WorkDetailsHeroContent(props: WorkDetailsHeroContentProps) {
  const css = getWorkDetailsHeroContentCss();

  return <HeroContent css={css} {...props} />;
}

export default WorkDetailsHeroContent;
