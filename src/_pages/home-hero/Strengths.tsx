/** @jsxImportSource @emotion/react */

"use client";

import getStrengthsCss from "./getStrengthsCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function Strengths(props: Props) {
  const css = getStrengthsCss();

  return <div css={css} {...props} />;
}

export default Strengths;
