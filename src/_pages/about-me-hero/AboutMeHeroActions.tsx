/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { HeroActions, HeroActionsProps } from "@/_components/hero";

import getAboutMeHeroActionsCss from "./getAboutMeHeroActionsCss";

type Props = HeroActionsProps;

function AboutMeHeroActions(props: Props) {
  const theme = useTheme();
  const css = getAboutMeHeroActionsCss(theme);

  return <HeroActions css={css} {...props} />;
}

export default AboutMeHeroActions;
