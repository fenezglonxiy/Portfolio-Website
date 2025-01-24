import React from "react";

import { Typography } from "@/_components/Typography";

export type InsightShortOverviewProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
>;

function InsightShortOverview(props: InsightShortOverviewProps) {
  return <Typography variant="body1" color="neutral-700" {...props} />;
}

export default InsightShortOverview;
