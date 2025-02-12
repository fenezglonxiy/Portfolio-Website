/** @jsxImportSource @emotion/react */

"use client";

import getWorkDetailsOtherWorksHeaderCss from "./getWorkDetailsOtherWorksHeaderCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkDetailsOtherWorksHeader(props: Props) {
  const css = getWorkDetailsOtherWorksHeaderCss();

  return <div css={css} {...props} />;
}

export default WorkDetailsOtherWorksHeader;
