import React from "react";

import { Typography } from "@/_components/Typography";

export type WorkCardWorkSummaryProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

function WorkCardWorkSummary(props: WorkCardWorkSummaryProps) {
  return <Typography color="neutral-550" {...props} />;
}

export default WorkCardWorkSummary;
