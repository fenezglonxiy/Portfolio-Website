/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { HeroContent, HeroContentProps } from "@/_components/hero";

import getWorkDetailsHeroContentCss from "./getWorkDetailsHeroContentCss";

type Props = HeroContentProps;

function WorkDetailsHeroContent(props: Props) {
  const theme = useTheme();
  const css = getWorkDetailsHeroContentCss(theme);

  return <HeroContent css={css} {...props} />;
}

export default WorkDetailsHeroContent;
