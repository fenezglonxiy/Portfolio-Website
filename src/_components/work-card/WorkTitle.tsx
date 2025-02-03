import React from "react";

import { Typography } from "@/_components/Typography";

export type WorkTitleProps = Omit<
  React.ComponentPropsWithoutRef<"h6">,
  "color"
>;

function WorkTitle(props: WorkTitleProps) {
  return <Typography variant="h6" color="neutral-800" {...props} />;
}

export default WorkTitle;
