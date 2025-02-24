/** @jsxImportSource @emotion/react */

"use client";

import getWorkTimeTrackingCss from "./getWorkTimeTrackingCss";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkTimeTracking(props: Props) {
  const css = getWorkTimeTrackingCss();

  return <div css={css} {...props} />;
}

export default WorkTimeTracking;
