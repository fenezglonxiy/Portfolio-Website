/** @jsxImportSource @emotion/react */

"use client";

import getHomeAboutMeDetailsCss from "./getHomeAboutMeDetailsCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HomeAboutMeDetails(props: Props) {
  const css = getHomeAboutMeDetailsCss();

  return <div css={css.root} {...props} />;
}

export default HomeAboutMeDetails;
