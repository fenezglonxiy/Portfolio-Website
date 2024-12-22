/** @jsxImportSource @emotion/react */

"use client";

import { HeroContent, HeroContentProps } from "@/_components/hero";
import clsx from "clsx";
import getWorkDetailsHeroContentCss from "./getWorkDetailsHeroContentCss";
import { useTheme } from "@mui/material";

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
