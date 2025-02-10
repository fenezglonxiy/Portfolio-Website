/** @jsxImportSource @emotion/react */

"use client";

import getHomeInsightsHeaderCss from "./getHomeInsightsHeaderCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeInsightsHeader(props: Props) {
  const css = getHomeInsightsHeaderCss();

  return <div css={css} {...props} />;
}

export default HomeInsightsHeader;
