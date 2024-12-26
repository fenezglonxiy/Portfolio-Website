import React from "react";

import { Typography } from "@/_components/Typography";

export type WorkCardWorkSummaryProps = React.ComponentPropsWithoutRef<"p">;

function WorkCardWorkSummary(props: WorkCardWorkSummaryProps) {
  const { color: _, ...rest } = props;

  return <Typography color="neutral-550" {...rest} />;
}

export default WorkCardWorkSummary;
