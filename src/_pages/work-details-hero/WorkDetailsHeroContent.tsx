/** @jsxImportSource @emotion/react */

"use client";

import clsx from "clsx";
import { useTheme } from "@mui/material";

import { HeroContent, HeroContentProps } from "@/_components/hero";

import getWorkDetailsHeroContentCss from "./getWorkDetailsHeroContentCss";

export type WorkDetailsHeroContentProps = HeroContentProps;

function WorkDetailsHeroContent(props: WorkDetailsHeroContentProps) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getWorkDetailsHeroContentCss(theme);

  return (
    <HeroContent
      css={css}
      className={clsx("flow-spacer-y", className)}
      {...rest}
    />
  );
}

export default WorkDetailsHeroContent;
