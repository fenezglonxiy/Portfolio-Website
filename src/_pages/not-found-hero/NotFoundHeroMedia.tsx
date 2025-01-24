/** @jsxImportSource @emotion/react */

"use client";

import { HeroMedia, HeroMediaProps } from "@/_components/hero";

import getNotFoundHeroMediaCss from "./getNotFoundHeroMediaCss";

export type NotFoundHeroMediaProps = HeroMediaProps & {
  srcSet?: string;
};

function NotFoundHeroMedia(props: NotFoundHeroMediaProps) {
  const css = getNotFoundHeroMediaCss();

  return (
    <div css={css}>
      <HeroMedia {...props} />
    </div>
  );
}

export default NotFoundHeroMedia;
