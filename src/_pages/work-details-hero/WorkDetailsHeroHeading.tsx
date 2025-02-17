/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { HeroHeading, HeroHeadingProps } from "@/_components/hero";

import getWorkDetailsHeroHeadingCss from "./getWorkDetailsHeroHeadingCss";

type Props = HeroHeadingProps;

function WorkDetailsHeroHeading(props: Props) {
  const theme = useTheme();
  const css = getWorkDetailsHeroHeadingCss(theme);

  return <HeroHeading css={css} {...props} />;
}

export default WorkDetailsHeroHeading;
