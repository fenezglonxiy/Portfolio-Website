import React from "react";

import { Typography } from "@/_components/Typography";

export type WorkSummaryProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

function WorkSummary(props: WorkSummaryProps) {
  return <Typography color="neutral-550" {...props} />;
}

export default WorkSummary;
