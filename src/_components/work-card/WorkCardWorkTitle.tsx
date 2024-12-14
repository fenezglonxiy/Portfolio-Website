import { Typography } from "@/_components/Typography";
import React from "react";

export type WorkCardWorkTitleProps = React.ComponentPropsWithoutRef<"h6">;

function WorkCardWorkTitle(props: WorkCardWorkTitleProps) {
  const { color, ...rest } = props;
  return <Typography variant="h6" color="neutral-800" {...rest} />;
}

export default WorkCardWorkTitle;
