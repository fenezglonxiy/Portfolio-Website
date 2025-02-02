/** @jsxImportSource @emotion/react */

"use client";

import getWorkTimeTrackingCss from "./getWorkTimeTrackingCss";

export type WorkTimeTrackingProps = React.ComponentPropsWithoutRef<"div">;

function WorkTimeTracking(props: WorkTimeTrackingProps) {
  const css = getWorkTimeTrackingCss();

  return <div css={css} {...props} />;
}

export default WorkTimeTracking;
