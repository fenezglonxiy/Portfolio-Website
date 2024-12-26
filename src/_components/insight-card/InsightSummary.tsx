import React from "react";

import { Typography } from "@/_components/Typography";

export type InsightSummaryProps = React.ComponentPropsWithoutRef<"p">;

function InsightSummary(props: InsightSummaryProps) {
  const { color: _, ...rest } = props;

  return (
    <Typography
      variant="body1Medium"
      fontWeight="regular"
      color="neutral-700"
      {...rest}
    />
  );
}

export default InsightSummary;
