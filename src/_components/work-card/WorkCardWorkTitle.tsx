import React from "react";

import { Typography } from "@/_components/Typography";

export type WorkCardWorkTitleProps = Omit<
  React.ComponentPropsWithoutRef<"h6">,
  "color"
>;

function WorkCardWorkTitle(props: WorkCardWorkTitleProps) {
  return <Typography variant="h6" color="neutral-800" {...props} />;
}

export default WorkCardWorkTitle;
