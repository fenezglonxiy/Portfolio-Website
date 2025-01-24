/** @jsxImportSource @emotion/react */

"use client";

import getNotFoundHeroLayoutCss from "./getNotFoundHeroLayoutCss";

export type NotFoundHeroLayoutProps = React.ComponentPropsWithoutRef<"div">;

function NotFoundHeroLayout(props: NotFoundHeroLayoutProps) {
  const css = getNotFoundHeroLayoutCss();

  return <div css={css} {...props} />;
}

export default NotFoundHeroLayout;
