/** @jsxImportSource @emotion/react */

"use client";

import getHeaderContainerCss from "./getHeaderContainerCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function HeaderContainer(props: Props) {
  const css = getHeaderContainerCss();

  return <div css={css} {...props} />;
}

export default HeaderContainer;
