import React from "react";
import WorkShowcaseCardContentBox from "./WorkShowcaseCardContentBox";

export type WorkShowcaseCardWorkOverviewProps =
  React.ComponentPropsWithoutRef<"div">;

function WorkShowcaseCardWorkOverview(
  props: WorkShowcaseCardWorkOverviewProps
) {
  return (
    <WorkShowcaseCardContentBox
      orientation="horizontal"
      justifyContent="space-between"
      flexGap={10}
      {...props}
    />
  );
}

export default WorkShowcaseCardWorkOverview;
