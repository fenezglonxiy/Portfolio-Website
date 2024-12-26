import React from "react";

import { Typography } from "@/_components/Typography";

export type WorkCardWorkTitleProps = React.ComponentPropsWithoutRef<"h6">;

function WorkCardWorkTitle(props: WorkCardWorkTitleProps) {
  const { color: _, ...rest } = props;
  return <Typography variant="h6" color="neutral-800" {...rest} />;
}

export default WorkCardWorkTitle;
