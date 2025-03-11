/** @jsxImportSource @emotion/react */

"use client";

import { HeroMedia, HeroMediaProps } from "@/_components/hero";

import getWorkDetailsHeroMediaCss from "./getWorkDetailsHeroMediaCss";

type Props = HeroMediaProps;

function WorkDetailsHeroMedia(props: Props) {
  const css = getWorkDetailsHeroMediaCss();

  return <HeroMedia css={css} {...props} />;
}

export default WorkDetailsHeroMedia;
