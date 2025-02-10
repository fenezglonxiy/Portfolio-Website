/** @jsxImportSource @emotion/react */

"use client";

import getHomeSelectedWorksHeaderCss from "./getHomeSelectedWorksHeaderCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeSelectedWorksHeader(props: Props) {
  const css = getHomeSelectedWorksHeaderCss();

  return <div css={css} {...props} />;
}

export default HomeSelectedWorksHeader;
